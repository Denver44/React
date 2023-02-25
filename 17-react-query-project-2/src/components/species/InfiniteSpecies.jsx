import InfiniteScroll from "react-infinite-scroller";
import Species from "components/species/Species";
import { fetchSpecies } from "components/api/helper.js";
import { useInfiniteQuery } from "react-query";

const initialUrl = "https://swapi.dev/api/species/";

const InfiniteSpecies = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    "sw-species",
    ({ pageParam = initialUrl }) => fetchSpecies(pageParam),
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
          return pageData.data.results.map((species) => {
            return (
              <Species
                key={species.name}
                name={species.name}
                language={species.language}
                averageLifespan={species.average_lifespan}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteSpecies;
