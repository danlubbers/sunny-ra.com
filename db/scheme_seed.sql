-- Table for Sunny's Paintings
create table images (
    images_id serial primary key,
    category text,
    year decimal,
    title text,
    dimensions text,
    medium text, 
    orientation text,
    sold boolean,
    img text
);

-- Home Images
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Black Sand', '44in x 68in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/black-sand.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Mammoth', '42in x 38in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/mammoth.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Flight', '11in x 14in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/flight.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Manta', '16in x 20in', 'Oil on Canvas mounted on panel', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/manta.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Kinetic', '14in x 11in', 'Oil on Paper', 'vertical', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/kinetic.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Might', '11in x 14in', 'Oil on Paper', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/might.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Radiate', '32in x 48in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/radiate.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Nebula', '12in x 16in', 'Oil on Canvas mounted on panel', 'horizontal', true, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/nebula.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Chase', '16in x 12in', 'Oil on Canvas mounted on panel', 'vertical', true, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/chase.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Harvest', '11in x 14in', 'Oil on Paper', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/harvest.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('home', 2017, 'Expedition', '16in x 12in', 'Oil on Canvas mounted on panel', 'vertical', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/expedition.jpg');

-- Paintings 2006
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2006', 2006, 'The Final Round', '54in x 40in', 'Oil on Canvas', 'vertical', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-1.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2006', 2006, 'It''s Not Enough', '43in x 34in', 'Oil on Canvas', 'vertical', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-2.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2006', 2006, 'The Only One', '38in x 50in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-3.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2006', 2006, 'Make it Tomorrow', '50in x 40in', 'Oil on Canvas', 'vertical', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-.4jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2006', 2006, 'Go Ahead', '5in x 40in', 'Oil on Canvas', 'vertical', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-5.jpg');

-- Paintings 2008
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Float', '46in x 70in', 'Oil on Canvas', 'horizontal', true, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-1.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Left Behing', '42in x 32in', 'Oil on Canvas', 'vertical', true, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-2.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Fallen', '20in x 46in', 'Oil on Canvas', 'horizontal', true, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-3.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Take You Out', '20in x 46in', 'Oil on Canvas', 'horizontal', true, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-4.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Aftershock', '20in x 46in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-5.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Burn Out Bright', '20in x 46in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-6.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Runway', '20in x 46in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-7.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Untitled', '20in x 46in', 'Oil on Canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-8.jpg');
insert into images (category, year, title, dimensions, medium, orientation, sold, img) values ('paintings2008', 2008, 'Blur', '16ft across', 'Acrylic paint, pastel, graphite, vellum and canvas', 'horizontal', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-9.jpg');