"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Divider, Grid, Slide } from "@mui/material";
import flag from "./Flag.png";
import Image from "next/image";
import GavelIcon from "@mui/icons-material/Gavel";
import Carousel from "react-material-ui-carousel";
import gls from './gls.jpeg'
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <Carousel>
        <CardMedia
          component="img"
          height="194"
          image="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/mercedes-benz-eqa-2022-front-quarter-tracking.jpg?itok=2s0VjzKb"
          alt="Paella dish"
        />
        <CardMedia
          component="img"
          height="194"
          image={'https://imgd.aeplcdn.com/0x0/n/cw/ec/45390/gls-exterior-right-front-three-quarter-2.jpeg'}
          alt="Paella dish"
        />
      </Carousel>
      <CardContent>
        <Typography>
          <span>
            WATERCRAFTS
            <i style={{ margin: "0 1rem" }}>
              <Image width={30} height={20} alt="saudi flag" src={flag} />
            </i>
          </span>
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          style={{
            margin: "1rem 0",
            borderBottom: "3px white solid",
            padding: "0 0 1rem 0",
          }}
        >
          <Grid item>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ fontWeight: 700 }}
            >
              AKYACHT
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <TurnedInNotIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          color="text.secondary"
          component={"h5"}
          style={{ marginBottom: "1.5rem" }}
        >
          Atalay
        </Typography>
      </CardContent>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={6}>
          <Typography
            component={"div"}
            style={{
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              padding: ".5rem",
              borderRadius: "0 1rem 1rem 0",
            }}
          >
            <span style={{ color: "#121212" }}>0d 18h 49m</span>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            <span>748 km</span>
          </Typography>
        </Grid>
      </Grid>
      <CardActions disableSpacing>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <span>SAR 240,000</span>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <VisibilityIcon style={{ margin: "0 .5rem" }} />
              <Grid item>
                <span>20</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <GavelIcon style={{ margin: "0 .5rem" }} />
              <Grid item>
                <span>20</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
