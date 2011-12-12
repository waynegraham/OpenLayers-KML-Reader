/* Author:

*/


$().ready(function(){
  var map = new OpenLayers.Map({
    div: "map",
    layers: [
      new OpenLayers.Layer.WMS(
        "WMS", "http://vmap0.tiles.osgeo.org/wms/vmap0",
        {layers: "basic"}
    ),
    new OpenLayers.Layer.Vector("KML", {
      strategies: [new OpenLayers.Strategy.Fixed()],
      protocol: new OpenLayers.Protocol.HTTP({
        url: "kml/mapperz-kml-example.kml",
        format: new OpenLayers.Format.KML({
          extractStyles: true, 
          extractAttributes: true,
          maxDepth: 2
        })
      })
    })
    ],
    center: new OpenLayers.LonLat(-0.1279688 ,51.5077286),
    zoom: 11
  });

});


