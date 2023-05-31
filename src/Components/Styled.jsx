import styled, { css } from "styled-components";

export const Button = styled.button`
  background: var(--green-d);
  border-radius: 6px;
  color: var(--white);
  display:flex;
  justify-content:space-around;
  column-gap: 6px;
  align-items:center;
  padding: 8px 6px;
  ${(props) =>
    props.$white &&
    css`
    background: var(--white);
    color: var(--green-d);
      }
    `};
    ${(props) =>
      props.$yellow &&
      css`
      background: var(--yellow-d);
        }
      `};
      ${(props) =>
        props.$pending &&
        css`
        background: transparent;
        color: var(--yellow-d);
        border: 1px solid var(--yellow-d);
          }
        `};
        ${(props) =>
          props.$approved &&
          css`
          background: transparent;
          color: var(--green-d);
          border: 1px solid var(--green-d);
            }
          `};
          ${(props) =>
            props.$declined &&
            css`
            background: transparent;
            color: var(--red);
            border: 1px solid var(--red);
              }
            `};
`;
export const MenuItem=styled.button`
    color: var(--green-d);
    width:80px;
    padding: 8px 6px;
    ${(props) =>
      props.$yellow &&
      css`
      color: var(--yellow-d);
        }
      `
      };
      ${(props) =>
        props.$red &&
        css`
        color: var(--red-d);
          }
        `
        };

`
export const Input = styled.input`
  width: 100%;
  border: solid 1px var(--green-l);
  border-radius: 6px;
  padding: 8px 6px;
  margin-bottom: 16px;
  &:focus,
  &:active,
  &:focus-within {
    outline: solid 1px var(--green-d);
  }
  ${(props) =>
    props.$error &&
    css`
      border: solid 1px red;
      &:focus,
      &:active,
      &:focus-within {
        outline: solid 1px var(--green-d);
      }
    `};
`;
export const Card = styled.div`
  width: 85%;
  height:150px;
  box-sizing:border-box;
  // border-radius: 50px 10px 10px 100px;
  linear-gradient(45deg, var(--green), var(--green-l));
  // border-radius: 10px;
  // padding: 8px 8px 8px 24px;
  // box-shadow: 3px 2px 4px 2px var(--gray-cc);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  font-size: larger;
  border-radius: 50px 10px 10px 100px;
    padding: 18px 8px 8px 30px;
  text-transform:uppercase;
  & .date{
    grid-column: 3/4;
    grid-row: 1/2;
    justify-self: center;
    align-self: start;
  }
  & h3{
    grid-column: 1/3;
    grid-row: 1/2;
    font-size:22px;
    font-weight:600;
    text-transform:capitalize;
  }
  & .time{
    grid-column: 3/4;
    grid-row: 2/4;
    font-size:24px;
    font-weight:600;
    justify-self: center;
    align-self: end;
  }
  & .status{
    grid-column: 1/3;
    grid-row: 2/3;
    font-size:18px;
    text-transform:capitalize;
  }
  & .status::before{
    content: " ";
    display:inline-block;
    width:10px;
    height:10px;
    margin-right:4px;
    border-radius:50%;
  }
  ${(props) =>
    props.$onboard &&
    css`
      .status::before {background-color:var(--yellow-d)}
      & {
        background-color: var(--yellow-l)}
      }
    `};
  ${(props) =>
    props.$canceled &&
    css`
    status::before {background-color:var(--orange-d)}
      & {
        background-color;var(--orange-l)}
      }

    `};
  ${(props) =>
    props.$scheduled &&
    css`
    &{
    background-color:var(--gray-l);}
    & .status::before{
      background-color:var(--gray-d);
    }

    `};
  ${(props) =>
    props.$departed &&
    css`
    .status::before {background-color:var(--green-d);}
    &{
      background-color:var(--green-l);
      background:linear-gradient(45deg, var(--green-l), var(--green-d));
      background:linear-gradient(185deg, #cbd5d9, #8fa5ae);
}

    `};
  ${(props) =>
    props.$arrived &&
    css`
    .status::before {background-color:var(--blue-d);}
    &{background-color:var(--blue-l)}

    `};
`;
export const Status=styled.div`
& .status{
  font-size:18px;
  text-transform:capitalize;
}
& .status::before{
  content: " ";
  display:inline-block;
  width:10px;
  height:10px;
  margin-right:4px;
  border-radius:50%;
}
${(props) =>
    props.dolla==="departed" &&
    css`
      .status::before {background-color:var(--yellow-d)}
    `};
  ${(props) =>
    props.$onboarding &&
    css`
      .status::before {background-color:var(--yellow-d)}
    `};
  ${(props) =>
    props.$canceled &&
    css`
    status::before {background-color:var(--orange-d)}
    `};
  ${(props) =>
    props.$scheduled &&
    css`
    &{
    background-color:var(--gray-l);}
    `};
  ${(props) =>
    props.$departed &&
    css`
    .status::before{
      background-color:var(--green-d);
    }
    `};
  ${(props) =>
    props.$arrived &&
    css`
    .status::before {background-color:var(--blue-d);}
    `};
}
`