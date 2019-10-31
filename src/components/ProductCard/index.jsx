import React from 'react';
import Typography from '../Typography';
import { Flex, Box } from '../FlexBox';
import { StyledDiv } from './styles';
import ImageComponent from '../ImageComponent';

const ProductCard = ({ product }:{ product: Object }) => (
  <Flex pt="0.8rem" pb="0.8rem" pl="0.8rem" pr="0.8rem" width={[1, 1 / 2, 1 / 2, 1 / 4]}>
    <Flex tag={StyledDiv}>
      <Box>
        <Typography tag="h3" weight="bold" size="button">{product.title}</Typography>
      </Box>
      <Box mt="auto" mb="0">
        <ImageComponent
          alt={product.title}
          src={product.images[0].url}
        />
      </Box>
      <Box alignSelf="center" mt="auto" mb="0">
        <Typography size="button">
          R$
          {product.productVariants[0].price.toString().replace('.', ',')}
        </Typography>
      </Box>
    </Flex>
  </Flex>
);

export default ProductCard;
