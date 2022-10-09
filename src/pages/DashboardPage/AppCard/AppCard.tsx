import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { PicsumInterface } from '../../../interfaces/PicsumInterface';

type AppCardProps = {
  data: PicsumInterface
}

const AppCard = ({ data }: AppCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={data.download_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Source: {data.url}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AppCard;
