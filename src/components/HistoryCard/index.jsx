import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const HistoryCard = ({ user }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="h5" component="div">
          {user.last_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> Detalle</Button>
      </CardActions>
    </Card>
  );
};

export default HistoryCard;