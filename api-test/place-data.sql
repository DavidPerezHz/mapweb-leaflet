CREATE TABLE places ( 
  id INT NOT NULL AUTO_INCREMENT, 
  latitud float(11,7) NOT NULL, 
  longitud float(11,7) NOT NULL, 
  descripcion varchar(500) NULL DEFAULT "", 
  venta DECIMAL(10,2) NULL DEFAULT 0.0, 
  zona ENUM("Zona norte", "Zona sur") DEFAULT "Zona norte", 
  PRIMARY KEY (id) 
)

INSERT INTO places (latitud, longitud, descripcion, venta, zona)
VALUE 
(17.9509658,-92.5588219, "Tabasco", 200.00, 2),
(20.6737919,-103.3354131, "Guadalajara", 200.00, 2),
(25.4303722,-101.0534345, "Museo de Las Aves de México", 400.00, 1),
(25.6486584,-100.3019735, "Museo de arte contemporáneo de Monterrey", 300.00, 1);

INSERT INTO places (latitud, longitud, descripcion, venta, zona)
VALUE 
(25.5223431,-103.4336964, "Estado Revolución", 500.00, 1),
(29.0821369,-100.3019735, "Centro ecológico Sonora", 700.00, 1),
(27.9698548,-114.0450847, "Reserva de la Biosfera El Vizcaíno", 700.00, 1),
(23.182926,-102.9079959, "Fresnillo Zacatecas", 500.00, 1),
(21.876014,-102.3210832, "Museo José de Guadalupe Posada", 600.00, 1),

(19.151316,-103.0243758, "Michoacan", 600.00, 2),
(18.9318783,-99.2756701, "Museo Regional Cuauhnáhuac (Palacio de Cortés) Cuernavaca", 800.00, 2),
(17.0812951,-96.7708366, "Oaxaca de Juárez", 400.00, 2),
(16.7459857,-93.1997809, "Tuxtla Gutiérrez - Chiapas", 520.00, 2);