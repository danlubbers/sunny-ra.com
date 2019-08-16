-- Table for Sunny's Paintings
create table images (
    images_id serial primary key,
    category text,
    year decimal,
    title text,
    dimensions text,
    medium text, 
    sold boolean,
    img text
);

-- Home Images
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Black Sand', '44in x 68in', 'Oil on Canvas', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/black-sand.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Mammoth', '42in x 38in', 'Oil on Canvas', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/mammoth.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Flight', '11in x 14in', 'Oil on Canvas', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/flight.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Manta', '16in x 20in', 'Oil on Canvas mounted on panel', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/manta.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Kinetic', '14in x 11in', 'Oil on Paper', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/kinetic.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Might', '11in x 14in', 'Oil on Paper', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/might.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Radiate', '32in x 48in', 'Oil on Canvas', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/radiate.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Nebula', '12in x 16in', 'Oil on Canvas mounted on panel', true, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/nebula.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Chase', '16in x 12in', 'Oil on Canvas mounted on panel', true, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/chase.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Harvest', '11in x 14in', 'Oil on Paper', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/harvest.jpg');
insert into images (category, year, title, dimensions, medium, sold, img) values ('home', 2017, 'Expedition', '16in x 12in', 'Oil on Canvas mounted on panel', false, 'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/expedition.jpg');
