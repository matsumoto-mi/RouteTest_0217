import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  const onClickPage1DetailA = () => {
    history.push("/page1/detailA");
  };
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>Page1DetailA</Link>
      <br />
      <Link to="/page1/detailB">Page1DetailB</Link>
      <br />
      <button onClick={onClickPage1DetailA}>Page1DetailA</button>
    </div>
  );
};
