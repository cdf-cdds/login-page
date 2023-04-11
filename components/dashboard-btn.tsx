import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function DashboardBtn() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
        >
            <Button 
                variant="contained" 
                size="large"
                href="./dashboard"
            >
                Dashboard
            </Button>
        </Grid>
    )
}