import { AppBar, Toolbar, styled } from "@mui/material;";

const StyledToolBar = styled(Toolbar)`
  background: #121212;
`;

export const Header = () => {
  return (
    <AppBar>
      <StyledToolBar></StyledToolBar>
    </AppBar>
  );
};
