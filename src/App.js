import styled from 'styled-components'

// cNfRFo fdjles
// ejECfw ejECfw
const OperationButton = styled.div`
  font-size: var(--cx-font-sizeBody1);
  font-weight: var(--cx-font-weightMedium);
  margin-left: var(--cx-spacing-3x);
  color: blue;
  content: "xiaoming";
  border: 2px solid #009ee0;
  ${({ $disabled }) => $disabled &&
          `
    pointer-events: none;
    cursor: default;
    color: var(--cx-color-textDisabled);
    opacity: 0.8;
    text-decoration: none;
  `}
`;

export default function App() {
  return (
    <>
      <OperationButton>Hello, world!</OperationButton>
      <div>{process.env.NODE_ENV}</div>
    </>
  );
}
