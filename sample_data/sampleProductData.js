const sampleProductData = {
  "id": 11001,
  "campus": "hrnyc",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-01-12T21:17:59.200Z",
  "updated_at": "2021-01-12T21:17:59.200Z",
  "features": [
    {
      "feature": "Fabric",
      "value": "Canvas"
    },
    {
      "feature": "Buttons",
      "value": "Brass"
    }
  ]
};

export default sampleProductData;

/*
Sample Review Data (HTTP get request '/reviews?product_id=2')

{
  "product": "2",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    }
  ]
}

Sample Review Metadata (HTTP get request '/reviews/meta?product_id=2)
{
  "product_id": "11001",
  "ratings": {
    "0": "3",
    "1": "4",
    "2": "5",
    "3": "39",
    "4": "18",
    "5": "28"
  },
  "recommended": {
    "false": "12",
    "true": "85"
  },
  "characteristics": {
    "Fit": {
      "id": 36825,
      "value": "3.2340425531914894"
    },
    "Length": {
      "id": 36826,
      "value": "3.0425531914893617"
    },
    "Comfort": {
      "id": 36827,
      "value": "3.4468085106382979"
    },
    "Quality": {
      "id": 36828,
      "value": "3.6000000000000000"
    }
  }
}
*/
