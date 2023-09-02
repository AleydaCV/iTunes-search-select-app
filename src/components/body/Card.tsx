import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageDefault from '../../assets/image-default-2.jpg';

const CardComponent = () => {
  return (
    <Card sx={{ width: 250, height:350 , backgroundColor:'#1c1c1c'}}>
    <CardContent sx={{padding:'10px'}}>
        <img src={ImageDefault} alt="" width={230} height={250}/>
      <Typography sx={{ fontSize: 20 }} color="white" >
        Music Name
      </Typography>
      <Typography sx={{ fontSize: 12 }} color="white" >
        Artist Name
      </Typography>
      <Typography sx={{ fontSize: 12 }} color="white" >
        Price
      </Typography>
    </CardContent>
  </Card>
  )
}

export default CardComponent