import { Global } from "@emotion/react";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks/hooks";
import { changeDrawerState } from "../../../slices/compareDrawerSlice";
import { useServicesCardsQuery } from "../../../types";
import CardsScroller from "./CardsScroller";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

export default function SwipeableEdgeDrawer() {
  const dispatch = useAppDispatch();
  const showDrawer = useAppSelector(
    (state) => state.changeDrawerState.showDrawer
  );

  const cardId = useAppSelector((state) => state.cardId.cardId);

  const { data, loading, error } = useServicesCardsQuery();

  if (loading) {
    return <div>Loading components</div>;
  }

  if (error) {
    return <div>Error components</div>;
  }

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        anchor="bottom"
        open={showDrawer}
        onClose={() => dispatch(changeDrawerState(false))}
        onOpen={() => dispatch(changeDrawerState(true))}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex space-x-2">
                <p>You have chosen</p>
                <p className="font-semibold text-iwanttoColor">
                  {cardId?.length}
                </p>
                <p>of 3 cards</p>
              </div>
            </div>
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <div className="lg:container lg:mx-auto lg:pt-12">
            <CardsScroller data={data} />
          </div>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
