import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout className="animate__animated animate__fadeIn animate__faster">
      {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius cum iure corrupti, modi iusto quas quaerat? Quos, itaque. Commodi ea quam in repudiandae quae accusamus aperiam magni, consequatur libero natus?</Typography> */}

      <NothingSelectedView />

      {/* <NoteView/> */}

      <IconButton
        size="Large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
