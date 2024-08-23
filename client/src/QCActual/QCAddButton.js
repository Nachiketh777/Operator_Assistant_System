import { Box, Fab, Stack } from '@mui/material';
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const QCActualAdd = (props) => {
    return (
        <Box
            sx={{
                mb: '0px',
                marginTop: -6,
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
            }}
        >
            <Box
                sx={{ mb: 1 }}
                onClick={() => {
                    props.setIsAddButton(true);
                    props.setEditData([]);
                    props.setOpen(true);
                    console.log('open');
                }}
            >
                <Stack direction="row" spacing={2}>
                    <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="add"
                    >
                        <AddIcon sx={{ marginRight: 1 }} />
                        Add New Part
                    </Fab>
                </Stack>
            </Box>

        </Box>
    )
}

export default QCActualAdd;

