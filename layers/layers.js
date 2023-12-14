ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5234").setExtent([96774.615830, 193196.513846, 97765.292345, 193663.224849]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_points_1 = new ol.format.GeoJSON();
var features_points_1 = format_points_1.readFeatures(json_points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_1.addFeatures(features_points_1);
var lyr_points_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_1, 
                style: style_points_1,
                interactive: true,
    title: 'points<br />\
    <img src="styles/legend/points_1_0.png" /> SLPA<br />\
    <img src="styles/legend/points_1_1.png" /> Water Board<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_points_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_points_1];
lyr_points_1.set('fieldAliases', {'No': 'No', 'ID': 'ID', 'Code': 'Code', 'Y1': 'Y1', 'X1': 'X1', 'Meter_Numb': 'Meter_Numb', 'Account_Nu': 'Account_Nu', 'Company_Na': 'Company_Na', 'Account_Ad': 'Account_Ad', 'Ownership': 'Ownership', 'Receivers': 'Receivers', 'Purpose': 'Purpose', 'Buildings': 'Buildings', 'April_Mete': 'April_Mete', 'May_Meter': 'May_Meter', 'June_Meter': 'June_Meter', 'July_Meter': 'July_Meter', 'August_Met': 'August_Met', 'Last_Repai': 'Last_Repai', 'Others': 'Others', 'Images': 'Images', });
lyr_points_1.set('fieldImages', {'No': 'TextEdit', 'ID': 'TextEdit', 'Code': 'TextEdit', 'Y1': 'TextEdit', 'X1': 'TextEdit', 'Meter_Numb': 'TextEdit', 'Account_Nu': 'TextEdit', 'Company_Na': 'TextEdit', 'Account_Ad': 'TextEdit', 'Ownership': 'TextEdit', 'Receivers': 'TextEdit', 'Purpose': 'TextEdit', 'Buildings': 'TextEdit', 'April_Mete': 'TextEdit', 'May_Meter': 'TextEdit', 'June_Meter': 'TextEdit', 'July_Meter': 'TextEdit', 'August_Met': 'TextEdit', 'Last_Repai': 'TextEdit', 'Others': 'TextEdit', 'Images': 'TextEdit', });
lyr_points_1.set('fieldLabels', {'No': 'no label', 'ID': 'no label', 'Code': 'no label', 'Y1': 'no label', 'X1': 'no label', 'Meter_Numb': 'no label', 'Account_Nu': 'no label', 'Company_Na': 'no label', 'Account_Ad': 'no label', 'Ownership': 'no label', 'Receivers': 'no label', 'Purpose': 'no label', 'Buildings': 'no label', 'April_Mete': 'no label', 'May_Meter': 'no label', 'June_Meter': 'no label', 'July_Meter': 'no label', 'August_Met': 'no label', 'Last_Repai': 'no label', 'Others': 'no label', 'Images': 'no label', });
lyr_points_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});