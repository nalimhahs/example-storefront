import React, { Component } from "react";

@withStyles(styles, { name: "HomePageFeatured" })
class HomePageFeatured extends Component {
  render() {
    const { classes, featuredProducts } = this.props;
    return (
      <div className={classes.root}>
        <div>HomePage Featured</div>
        {!!featuredProducts &&
          featuredProducts.map((product) => {
            return (
              <div
                className="featured-product-box"
                key={product.product.slug}
                style={{ border: "1px solid black", width: "350px" }}
              >
                <div className="featured-product-title">
                  <a href={`/product/${product.product.slug}`}>{product.product.title}</a>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
