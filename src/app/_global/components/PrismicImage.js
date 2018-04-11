/**
 * Will render a picture element. Requires Prismic custom types setup with thumbnails (Tablet, Mobile), i.e.:
 *   "top_image" : {
 *     "type" : "Image",
 *     "fieldset" : "Responsive Image",
 *     "config" : {
 *       "constraint" : {
 *         "width" : 1500,
 *         "height" : 500
 *       },
 *       "thumbnails" : [ {
 *         "name" : "Tablet",
 *         "width" : 900,
 *         "height" : 300
 *       }, {
 *         "name" : "Mobile",
 *         "width" : 400,
 *         "height" : 300
 *       } ]
 *     }
 *   },

 * @param text
 * @returns {*}
 * @constructor
 */
function PrismicImageComponent ({ document, apiId }) {
  const mainView = document.data[apiId];
  const tabletView = document.data[apiId].Tablet;
  const mobileView = document.data[apiId].Mobile;

  return (
    <picture>
      <source media="(max-width: 400px)" srcSet={mobileView.url}/>
      <source media="(max-width: 900px)" srcSet={tabletView.url}/>
      <source srcSet={mainView.url}/>
      <img src={mainView.url} alt={mainView.alt}/>
    </picture>
  );
}

export default PrismicImageComponent;