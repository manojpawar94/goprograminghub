import Link from "next/link";
import { Grid, Button } from "@mui/material";

export default function PostNav({ index, posts }) {
  return (
    <Grid container justifyContent="space-between" sx={{ p: 2 }}>
      {index > 0 && posts[index - 1] && (
        <Grid xs={4} sm={2}>
          <Link href={posts[index - 1].permalink} passHref>
            <Button variant="contained" fullWidth>
              Previous
            </Button>
          </Link>
        </Grid>
      )}

      {index < posts.length - 1 && posts[index] && (
        <Grid xs={4} sm={2} sx={{ marginLeft: "auto" }}>
          <Link href={posts[index].permalink} passHref>
            <Button variant="contained" fullWidth>
              Next
            </Button>
          </Link>
        </Grid>
      )}
    </Grid>
  );
}
