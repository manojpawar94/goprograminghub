import { Grid, Link, Typography } from "@mui/material";

export default function SectionHeader({ title, centered }) {
  return (
    <Grid container spacing={2} justifyContent={centered ? "center" : "flex-start"}>
      <Grid xs={12}>
        <Typography
          variant="h2"
          component="h3"
          color="primary"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.5px",
            textAlign: centered ? "center" : "inherit",
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}
