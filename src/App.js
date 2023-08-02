import Calculator from "./components/Calculator";
import styled from "@emotion/styled";
import { BsFillCartFill } from "react-icons/bs";
import { colors } from "./styles";

const category = {
  color: colors.red[500],
  name: "Groceries",
  icon: BsFillCartFill,
};

function App() {
  return (
    <div>
      <Title>Calculator</Title>
      <Calculator category={category} />
    </div>
  );
}

const Title = styled.h1`
padding:28px;
font-size:40px;
font-weight:bold;
color:${colors.white};
background:${colors.red[500]};
margin-bottom:20px;
border-radius:10px;
`

export default App;
