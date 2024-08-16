var wms_layers = [];


        var lyr_satelital_0 = new ol.layer.Tile({
            'title': 'satelital',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Limite_Barrios_1 = new ol.format.GeoJSON();
var features_Limite_Barrios_1 = format_Limite_Barrios_1.readFeatures(json_Limite_Barrios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Barrios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Barrios_1.addFeatures(features_Limite_Barrios_1);
var lyr_Limite_Barrios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Barrios_1, 
                style: style_Limite_Barrios_1,
                popuplayertitle: "Limite_Barrios",
                interactive: true,
                title: '<img src="styles/legend/Limite_Barrios_1.png" /> Limite_Barrios'
            });
var format_Limite_Distrital_2 = new ol.format.GeoJSON();
var features_Limite_Distrital_2 = format_Limite_Distrital_2.readFeatures(json_Limite_Distrital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Distrital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Distrital_2.addFeatures(features_Limite_Distrital_2);
var lyr_Limite_Distrital_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Distrital_2, 
                style: style_Limite_Distrital_2,
                popuplayertitle: "Limite_Distrital",
                interactive: true,
                title: '<img src="styles/legend/Limite_Distrital_2.png" /> Limite_Distrital'
            });
var format_Radio_Urbano_Homologado_3 = new ol.format.GeoJSON();
var features_Radio_Urbano_Homologado_3 = format_Radio_Urbano_Homologado_3.readFeatures(json_Radio_Urbano_Homologado_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radio_Urbano_Homologado_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radio_Urbano_Homologado_3.addFeatures(features_Radio_Urbano_Homologado_3);
var lyr_Radio_Urbano_Homologado_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radio_Urbano_Homologado_3, 
                style: style_Radio_Urbano_Homologado_3,
                popuplayertitle: "Radio_Urbano_Homologado",
                interactive: true,
                title: '<img src="styles/legend/Radio_Urbano_Homologado_3.png" /> Radio_Urbano_Homologado'
            });
var format_Comunidades_4 = new ol.format.GeoJSON();
var features_Comunidades_4 = format_Comunidades_4.readFeatures(json_Comunidades_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidades_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_4.addFeatures(features_Comunidades_4);
var lyr_Comunidades_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidades_4, 
                style: style_Comunidades_4,
                popuplayertitle: "Comunidades",
                interactive: true,
                title: '<img src="styles/legend/Comunidades_4.png" /> Comunidades'
            });
var format_Area_Protegida_5 = new ol.format.GeoJSON();
var features_Area_Protegida_5 = format_Area_Protegida_5.readFeatures(json_Area_Protegida_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_Protegida_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Protegida_5.addFeatures(features_Area_Protegida_5);
var lyr_Area_Protegida_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_Protegida_5, 
                style: style_Area_Protegida_5,
                popuplayertitle: "Area_Protegida",
                interactive: true,
                title: '<img src="styles/legend/Area_Protegida_5.png" /> Area_Protegida'
            });
var format_Limite_GAMVM_6 = new ol.format.GeoJSON();
var features_Limite_GAMVM_6 = format_Limite_GAMVM_6.readFeatures(json_Limite_GAMVM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_GAMVM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_GAMVM_6.addFeatures(features_Limite_GAMVM_6);
var lyr_Limite_GAMVM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_GAMVM_6, 
                style: style_Limite_GAMVM_6,
                popuplayertitle: "Limite_GAMVM",
                interactive: true,
                title: '<img src="styles/legend/Limite_GAMVM_6.png" /> Limite_GAMVM'
            });

lyr_satelital_0.setVisible(true);lyr_Limite_Barrios_1.setVisible(true);lyr_Limite_Distrital_2.setVisible(true);lyr_Radio_Urbano_Homologado_3.setVisible(true);lyr_Comunidades_4.setVisible(true);lyr_Area_Protegida_5.setVisible(true);lyr_Limite_GAMVM_6.setVisible(true);
var layersList = [lyr_satelital_0,lyr_Limite_Barrios_1,lyr_Limite_Distrital_2,lyr_Radio_Urbano_Homologado_3,lyr_Comunidades_4,lyr_Area_Protegida_5,lyr_Limite_GAMVM_6];
lyr_Limite_Barrios_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'superficie': 'superficie', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Limite_Distrital_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'superficie': 'superficie', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'SHAPE_Leng': 'SHAPE_Leng', 'poblacion': 'poblacion', 'Shape_Le_1': 'Shape_Le_1', 'name': 'name', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Radio_Urbano_Homologado_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Descripcio': 'Descripcio', 'Superficie': 'Superficie', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Comunidades_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'nombre_dep': 'nombre_dep', 'nombre_c_1': 'nombre_c_1', 'id_unico': 'id_unico', 'tipo_area': 'tipo_area', 'poblacion_': 'poblacion_', 'viviendas_': 'viviendas_', 'Cat_A': 'Cat_A', 'Cat_B': 'Cat_B', 'tipo_pobla': 'tipo_pobla', 'nombre_c_2': 'nombre_c_2', 'poblacion1': 'poblacion1', 'clas_hab': 'clas_hab', 'LAT': 'LAT', 'LONG': 'LONG', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'nombre': 'nombre', 'superficie': 'superficie', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'SHAPE_Leng': 'SHAPE_Leng', 'poblacion': 'poblacion', 'Shape_Le_1': 'Shape_Le_1', 'name': 'name', });
lyr_Area_Protegida_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'APROTS': 'APROTS', 'NOMBRE_AP_': 'NOMBRE_AP_', 'CATEGORIA': 'CATEGORIA', 'BASE_LEG_1': 'BASE_LEG_1', 'AREA': 'AREA', 'HECTARES': 'HECTARES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Limite_GAMVM_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'sup': 'sup', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Limite_Barrios_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'nombre': 'TextEdit', 'superficie': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Limite_Distrital_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'nombre': 'TextEdit', 'superficie': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'SHAPE_Leng': 'TextEdit', 'poblacion': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'name': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Radio_Urbano_Homologado_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Descripcio': 'TextEdit', 'Superficie': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Comunidades_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'nombre_dep': 'TextEdit', 'nombre_c_1': 'TextEdit', 'id_unico': 'TextEdit', 'tipo_area': 'TextEdit', 'poblacion_': 'TextEdit', 'viviendas_': 'TextEdit', 'Cat_A': 'TextEdit', 'Cat_B': 'TextEdit', 'tipo_pobla': 'TextEdit', 'nombre_c_2': 'TextEdit', 'poblacion1': 'TextEdit', 'clas_hab': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'nombre': 'TextEdit', 'superficie': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'SHAPE_Leng': 'TextEdit', 'poblacion': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'name': 'TextEdit', });
lyr_Area_Protegida_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'APROTS': 'TextEdit', 'NOMBRE_AP_': 'TextEdit', 'CATEGORIA': 'TextEdit', 'BASE_LEG_1': 'TextEdit', 'AREA': 'TextEdit', 'HECTARES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Limite_GAMVM_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'sup': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Limite_Barrios_1.set('fieldLabels', {'OBJECTID': 'no label', 'nombre': 'inline label - always visible', 'superficie': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Limite_Distrital_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'nombre': 'inline label - always visible', 'superficie': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'SHAPE_Leng': 'no label', 'poblacion': 'no label', 'Shape_Le_1': 'no label', 'name': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Radio_Urbano_Homologado_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Descripcio': 'no label', 'Superficie': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Comunidades_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'nombre_dep': 'no label', 'nombre_c_1': 'inline label - always visible', 'id_unico': 'no label', 'tipo_area': 'no label', 'poblacion_': 'inline label - always visible', 'viviendas_': 'inline label - always visible', 'Cat_A': 'no label', 'Cat_B': 'no label', 'tipo_pobla': 'no label', 'nombre_c_2': 'no label', 'poblacion1': 'no label', 'clas_hab': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'nombre': 'no label', 'superficie': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'SHAPE_Leng': 'no label', 'poblacion': 'no label', 'Shape_Le_1': 'no label', 'name': 'no label', });
lyr_Area_Protegida_5.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'APROTS': 'no label', 'NOMBRE_AP_': 'no label', 'CATEGORIA': 'no label', 'BASE_LEG_1': 'no label', 'AREA': 'no label', 'HECTARES': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Limite_GAMVM_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'sup': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Limite_GAMVM_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});