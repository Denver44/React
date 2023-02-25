const cast1 = "Denver ";
const cast2 = "Tokyo ";
const movieName = "MoneyHeist";
function movie_name() {
  return movieName;
}

export default cast1; // this will be only default in the import other variable we can export it but not as a default
export { cast2, movie_name };
