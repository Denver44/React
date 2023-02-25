import InfiniteScroll from "react-infinite-scroller";
import Person from "components/people/Person";
import { fetchPeople } from "components/api/helper.js";
import { useInfiniteQuery } from "react-query";

const initialUrl = "https://swapi.dev/api/people/";

const InfinitePeople = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    "sw-people",
    ({ pageParam = initialUrl }) => fetchPeople(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.data.next || undefined,
    }
  );

  if (isLoading) return <div className="loading">loading...</div>;
  if (isError) return <div>{error.toString()}</div>;

  return (
    <>
      {isFetching && <div className="loading">loading...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) => {
          return pageData.data.results.map((person) => {
            return (
              <Person
                key={person.name}
                name={person.name}
                hairColor={person.hair_color}
                eyeColor={person.eye_color}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
};

export default InfinitePeople;
