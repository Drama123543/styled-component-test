import styled from 'styled-components'

// ejECfw ejECfw
const OperationButton = styled.div`
  font-size: var(--cx-font-sizeBody1);
  font-weight: var(--cx-font-weightMedium);
  margin-left: var(--cx-spacing-3x);
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
