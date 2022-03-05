import { withRouter } from "react-router-dom";
function Home(props) {
  console.log(props);
  return (
    <div>
      <h1>Wellcome to Home page{props.match.params.id}</h1>
      <h1>Wellcome to Home page{props.match.params.name}</h1>
    </div>
  );
}
export default withRouter(Home);
