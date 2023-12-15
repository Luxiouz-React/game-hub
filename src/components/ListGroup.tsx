import { FC } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

interface ListGroupProps {
  items: string[];
}

export const ListGroup: FC<ListGroupProps> = ({ items }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {items.length === 0 ? (
            <Typography variant="body1">No Items Found</Typography>
          ) : (
            items.map((item) => (
              <ListItem disablePadding key={item}>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))
          )}
        </List>
      </nav>
    </Box>
  );
};
