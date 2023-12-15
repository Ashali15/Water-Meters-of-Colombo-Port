ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5234").setExtent([96850.068569, 193293.578026, 97457.831735, 193579.897276]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_field_corrected_10_points_3 = new ol.format.GeoJSON();
var features_field_corrected_10_points_3 = format_field_corrected_10_points_3.readFeatures(json_field_corrected_10_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_field_corrected_10_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_field_corrected_10_points_3.addFeatures(features_field_corrected_10_points_3);
var lyr_field_corrected_10_points_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_field_corrected_10_points_3, 
                style: style_field_corrected_10_points_3,
                interactive: true,
    title: 'field_corrected_10_points<br />\
    <img src="styles/legend/field_corrected_10_points_3_0.png" /> SLPA<br />\
    <img src="styles/legend/field_corrected_10_points_3_1.png" /> Water Board<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_field_corrected_10_points_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,lyr_field_corrected_10_points_3];
lyr_field_corrected_10_points_3.set('fieldAliases', {'No': 'No', 'ID': 'ID', 'Code': 'Code', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Meter No.': 'Meter No.', 'Account No': 'Account No', 'Company': 'Company', 'Acc. Addre': 'Acc. Addre', 'Ownership': 'Ownership', 'Receivers': 'Receivers', 'Purpose': 'Purpose', 'Buildings': 'Buildings', 'Repair': 'Repair', 'Remarks': 'Remarks', 'Images': 'Images', });
lyr_field_corrected_10_points_3.set('fieldImages', {'No': 'TextEdit', 'ID': 'TextEdit', 'Code': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Meter No.': 'TextEdit', 'Account No': 'TextEdit', 'Company': 'TextEdit', 'Acc. Addre': 'TextEdit', 'Ownership': 'TextEdit', 'Receivers': 'TextEdit', 'Purpose': 'TextEdit', 'Buildings': 'TextEdit', 'Repair': 'TextEdit', 'Remarks': 'TextEdit', 'Images': 'TextEdit', });
lyr_field_corrected_10_points_3.set('fieldLabels', {'No': 'header label', 'ID': 'header label', 'Code': 'inline label', 'Longitude': 'inline label', 'Latitude': 'inline label', 'Meter No.': 'inline label', 'Account No': 'inline label', 'Company': 'inline label', 'Acc. Addre': 'inline label', 'Ownership': 'inline label', 'Receivers': 'inline label', 'Purpose': 'inline label', 'Buildings': 'inline label', 'Repair': 'inline label', 'Remarks': 'inline label', 'Images': 'inline label', });
lyr_field_corrected_10_points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});