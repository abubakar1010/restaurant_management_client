import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

  import PropTypes from 'prop-types'

const ChefCard = ({chef}) => {

    const {name,
        title,
        image_url} = chef;
    return (
        <>
            <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={image_url} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {title}
          </Typography>
        </CardBody>
      </Card>
        </>
    );
};

ChefCard.propTypes = {
    chef: PropTypes.object
}

export default ChefCard;
