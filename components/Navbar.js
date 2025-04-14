import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Head from "next/head";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState({
    languages: null,
    bigData: null,
    dsa: null,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, menu) => {
    setAnchorEl({ ...anchorEl, [menu]: event.currentTarget });
  };

  const handleMenuClose = (menu) => {
    setAnchorEl({ ...anchorEl, [menu]: null });
  };

  const navItems = [
    { name: "HOME", path: "/" },
    {
      name: "LANGUAGES",
      items: [
        { name: "Go Lang Programing", path: "/posts/programming/golang" },
        { name: "Python Programing", path: "/posts/programming/python" },
        { name: "Scala Programing", path: "/posts/programming/scala" },
      ],
    },
    {
      name: "BIG DATA",
      items: [{ name: "Apache Spark", path: "/posts/bigdata/apache-spark" }],
    },
    {
      name: "DSA",
      items: [
        {
          name: "Data Structures",
          path: "/posts/data-structures-and-algorithms",
        },
        { name: "Problem Solving Skills", path: "/posts/problemsolving" },
      ],
    },
    { name: "ABOUT", path: "/about" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left", px: 2 }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          fontSize: "1.5rem",
        }}
      >
        <CodeIcon sx={{ mr: 1, fontSize: "2rem" }} />
        GoProgrammingHub
      </Typography>
      <List>
        {navItems.map((item) => (
          <div key={item.name}>
            {item.items ? (
              <>
                <ListItem disablePadding>
                  <ListItemText>
                    <Button
                      fullWidth
                      color="inherit"
                      onClick={(e) =>
                        handleMenuOpen(e, item.name.toLowerCase())
                      }
                      sx={{ textAlign: "center" }}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {item.name}
                    </Button>
                  </ListItemText>
                </ListItem>
                <Menu
                  anchorEl={anchorEl[item.name.toLowerCase()]}
                  open={Boolean(anchorEl[item.name.toLowerCase()])}
                  onClose={() => handleMenuClose(item.name.toLowerCase())}
                >
                  {item.items.map((subItem) => (
                    <MenuItem
                      key={subItem.name}
                      component="a"
                      href={subItem.path}
                      onClick={() => handleMenuClose(item.name.toLowerCase())}
                    >
                      {subItem.name}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <ListItem disablePadding>
                <ListItemText>
                  <Button
                    fullWidth
                    component="a"
                    color="inherit"
                    href={item.path}
                    sx={{ textAlign: "center" }}
                  >
                    {item.name}
                  </Button>
                </ListItemText>
              </ListItem>
            )}
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        elevation={1}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          height: { xs: 56, md: 64 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ minHeight: { xs: 56, md: 64 }, px: { xs: 2, md: 3 } }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CodeIcon
                sx={{ mr: 1, fontSize: { xs: "1.5rem", md: "2rem" } }}
              />
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                GoProgrammingHub
              </a>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) =>
                item.items ? (
                  <Box key={item.name} sx={{ display: "inline" }}>
                    <Button
                      sx={{ mx: 1, textTransform: "none", fontSize: "1rem" }}
                      color="inherit"
                      onClick={(e) =>
                        handleMenuOpen(e, item.name.toLowerCase())
                      }
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {item.name}
                    </Button>
                    <Menu
                      anchorEl={anchorEl[item.name.toLowerCase()]}
                      open={Boolean(anchorEl[item.name.toLowerCase()])}
                      onClose={() => handleMenuClose(item.name.toLowerCase())}
                    >
                      {item.items.map((subItem) => (
                        <MenuItem
                          key={subItem.name}
                          component="a"
                          href={subItem.path}
                          onClick={() =>
                            handleMenuClose(item.name.toLowerCase())
                          }
                        >
                          {subItem.name}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={item.name}
                    sx={{ mx: 1, textTransform: "none", fontSize: "1rem" }}
                    component="a"
                    color="inherit"
                    href={item.path}
                  >
                    {item.name}
                  </Button>
                )
              )}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "auto",
              minWidth: 240,
              maxWidth: "80vw",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      GoProgrammingHub
    </Typography>
    <Button color="inherit">Home</Button>
    <Button color="inherit">Tutorials</Button>
    <Button color="inherit">About</Button>
  </Toolbar>
</AppBar>;
