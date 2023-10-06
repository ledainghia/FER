export interface Film {
    id: number;
    image: string;
    imageBackdrop: string;
    details: {
        short: string;
        full: string;
    };
    name: string;
    director: string;
    time: string;
    releaseDate: string;
    preview: string;
    rating: number;
    language: string;
    country: string;
    budget: string;
    cast: string[];
    storyline: string;
    genre: string[];
    studio: string;
}

const listOfFilms: Film[] = [
    {
        id: 1,
        image: 'https://image.tmdb.org/t/p/w300/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg',
        imageBackdrop: 'https://image.tmdb.org/t/p/w300/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        details: {
            short: 'Một người đàn ông vô tội bị kết án oan và bị kết án tù chung thân trong một nhà tù ở bang Maine.',
            full: 'Andy Dufresne, một nhân viên ngân hàng, bị kết án oan hai tội giết vợ và người tình của mình và bị kết án tù chung thân ở nhà tù Shawshank ở bang Maine. Andy phải vật lộn để thích nghi với cuộc sống trong tù, nhưng anh sớm kết bạn với Red, một tên tội phạm sừng sỏ. Andy bắt đầu sử dụng kỹ năng tài chính của mình để giúp đỡ các tù nhân khác và ông cũng bắt đầu một kế hoạch trốn thoát.',
        },
        name: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        time: '142 phút',
        releaseDate: '1994',
        preview: 'https://www.youtube.com/embed/PLl99DlL6b4?si=DC_k91hWFQX1ADkX',
        rating: 9.3,
        language: 'English',
        country: 'USA',
        budget: '$25 triệu',
        cast: ['Tim Robbins', 'Morgan Freeman'],
        storyline: `Andy Dufresne, a talented banker, finds himself wrongfully convicted of the murders of his wife and her lover. He is sentenced to life in Shawshank State Penitentiary in Maine. Inside the prison walls, Andy must adapt to the harsh realities of his new life. However, he forms a close friendship with Red, a seasoned inmate. Andy begins to use his financial skills to help his fellow prisoners and hatches an ingenious escape plan. The Shawshank Redemption is a story of hope, friendship, and the enduring human spirit as Andy navigates the challenges of prison life and orchestrates an escape that no one saw coming.`,
        genre: ['Tội phạm', 'Drama'],
        studio: 'Castle Rock Entertainment'
    },
    {
        id: 2,
        image: 'https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        imageBackdrop: 'https://image.tmdb.org/t/p/w300/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
        details: {
            short: 'Batman và Joker đối đầu trong một cuộc chiến giữa cái thiện và cái ác.',
            full: 'Bảy năm sau khi Batman đánh bại kẻ thù Joker, thành phố Gotham đang trải qua một thời kỳ hòa bình. Tuy nhiên, hòa bình này sớm bị đe dọa bởi sự xuất hiện của một tên tội phạm mới, Bane. Bane có kế hoạch phá hủy thành phố và Batman phải đối mặt với thử thách lớn nhất trong cuộc đời mình.',
        },
        name: 'The Dark Knight',
        director: 'Christopher Nolan',
        time: '152 phút',
        releaseDate: '2008',
        preview: 'https://www.youtube.com/embed/EXeTwQWrcwY?si=kPlKvefVsVA5mDWq',
        rating: 9.0,
        language: 'English',
        country: 'USA',
        budget: '$185 triệu',
        cast: ['Christian Bale', 'Heath Ledger', 'Michael Caine'],
        storyline: `Seven years after Batman's victory over the Joker, Gotham City enjoys a period of peace. However, this peace is short-lived as a new criminal mastermind, Bane, emerges with a plan to destroy the city. Batman faces his greatest challenge yet as he battles to save Gotham from chaos and destruction. The Dark Knight is a thrilling tale of heroism and villainy as Batman confronts the dangerous return of the Joker and a new criminal threat, Bane.`,
        genre: ['Hành động', 'Tội phạm', 'Siêu anh hùng'],
        studio: 'Warner Bros. Pictures'
    },
    {
        id: 3,
        image: 'https://image.tmdb.org/t/p/w300/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
        imageBackdrop: 'https://image.tmdb.org/t/p/w300/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg',
        details: {
            short: 'Một nhóm người dũng cảm lên đường tiêu diệt chiếc nhẫn chúa quyền năng.',
            full: 'Trong thế giới giả tưởng của Middle-earth, một nhóm người dũng cảm đã lên đường tiêu diệt chiếc nhẫn chúa quyền năng, một vật thể có sức mạnh hủy diệt. Chiếc nhẫn được tạo ra bởi Sauron, một phù thủy hắc ám, và nó đang đe dọa hủy diệt thế giới. Nhóm người dũng cảm phải vượt qua nhiều thử thách và nguy hiểm để hoàn thành nhiệm vụ của mình.',
        },
        name: 'The Lord of the Rings:\nThe Fellowship of the Ring',
        director: 'Peter Jackson',
        time: '201 phút',
        releaseDate: '2001',
        preview: 'https://www.youtube.com/embed/V75dMMIW2B4?si=k4Gfv3aFgHReO8b-',
        rating: 8.8,
        language: 'English',
        country: 'New Zealand',
        budget: '$93 triệu',
        cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
        storyline: `In the fantastical world of Middle-earth, a brave group embarks on a quest to destroy the One Ring, a powerful object capable of unimaginable destruction. Crafted by Sauron, a malevolent sorcerer, the Ring poses a grave threat to the world. The fellowship of heroes must overcome numerous challenges and dangers to fulfill their mission.`,
        genre: ['Kỳ ảo', 'Hành động', 'Phiêu lưu'],
        studio: 'New Line Cinema'
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        imageBackdrop: 'https://image.tmdb.org/t/p/w300/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
        details: {
            short: 'Một bộ phim tội phạm đen tối và bạo lực kể về những câu chuyện của nhiều nhân vật khác nhau.',
            full: 'Pulp Fiction là một bộ phim tội phạm đen tối và bạo lực kể về những câu chuyện của nhiều nhân vật khác nhau. Bộ phim được đạo diễn bởi Quentin Tarantino và có sự tham gia của John Travolta, Uma Thurman, Samuel L. Jackson, và Bruce Willis.',
        },
        name: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        time: '154 phút',
        releaseDate: '1994',
        preview: 'https://www.youtube.com/embed/s7EdQ4FqbhY?si=rHxor_s7HjbDi4AqY',
        rating: 8.9,
        language: 'English',
        country: 'USA',
        budget: '$8 triệu',
        cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        storyline: `Pulp Fiction is a dark and violent crime film that weaves together the stories of various characters. Directed by Quentin Tarantino, it features a star-studded cast, including John Travolta, Uma Thurman, Samuel L. Jackson, and Bruce Willis. The film explores the lives and crimes of these characters, interconnected by unexpected events.`,
        genre: ['Tội phạm', 'Drama'],
        studio: 'Miramax Films'
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        imageBackdrop: 'https://ntvb.tmsimg.com/assets/p6319_v_h8_bi.jpg?w=1280&h=720',
        details: {
            short: 'Câu chuyện về một gia đình mafia người Mỹ gốc Ý.',
            full: 'The Godfather là một bộ phim tội phạm kể về câu chuyện của một gia đình mafia người Mỹ gốc Ý. Bộ phim được đạo diễn bởi Francis Ford Coppola và có sự tham gia của Marlon Brando, Al Pacino, James Caan, và Robert Duvall.',
        },
        name: 'The Godfather II',
        director: 'Francis Ford Coppola',
        time: '175 phút',
        releaseDate: '1974',
        preview: 'https://www.youtube.com/embed/9O1Iy9od7-A?si=cwPGVX4aaoMXWjH7',
        rating: 9.0,
        language: 'English',
        country: 'USA',
        budget: '$13 triệu',
        cast: ['Al Pacino', 'Robert Duvall', 'Diane Keaton'],
        storyline: `The Godfather II delves into the world of the Corleone mafia family and the escalating war among criminal families. As Michael Corleone consolidates his power, he faces new challenges and betrayals, testing the family's loyalty and honor.`,
        genre: ['Tội phạm', 'Drama'],
        studio: 'Paramount Pictures'
    },
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        imageBackdrop: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/05/the-matrix-code-keanu-reeves.jpeg',
        details: {
            short: 'Một lập trình viên tên Thomas A. Anderson (Keanu Reeves) làm việc trong một công ty phần mềm, và còn là một hacker với biệt danh Neo',
            full: 'Một lập trình viên tên Thomas A. Anderson (Keanu Reeves) làm việc trong một công ty phần mềm, và còn là một hacker với biệt danh Neo. Neo thường đột nhập vào các hệ thống an ninh mạng, sau nhiều lần như thế, anh gặp gỡ một nhóm hacker bí ẩn. Họ thường giới thiệu với anh về thuật ngữ "Ma Trận"',
        },
        name: 'The Matrix',
        director: 'Lilly Wachowski',
        time: '136 phút',
        releaseDate: '1999',
        preview: 'https://www.youtube.com/embed/vKQi3bBA1y8?si=1lFUdtBaJ_4UQitZ',
        rating: 8.7,
        language: 'English',
        country: 'USA',
        budget: '$63 triệu',
        cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        storyline: `The Matrix tells the story of Thomas A. Anderson, a programmer who goes by the alias Neo. By day, he works for a software company, but by night, he's a hacker known for infiltrating secure computer systems. Neo's life takes a surreal turn when he encounters a mysterious group of hackers who introduce him to the concept of "the Matrix."`,
        genre: ['Khoa học viễn tưởng', 'Hành động'],
        studio: 'Warner Bros. Pictures'
    },
    {
        id: 7,
        image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        imageBackdrop: 'https://touchcinema.com/storage/phim-ke-danh-cap-giac-mo/phim-ke-danh-cap-giac-mo.jpg',
        details: {
            short: 'Một chuyên viên trộm thông tin tham gia vào các giấc mơ của người khác để đánh cắp bí mật.',
            full: 'Inception là một bộ phim khoa học viễn tưởng và hành động kể về một chuyên viên trộm thông tin tài ba, Dom Cobb, tham gia vào các giấc mơ của người khác để đánh cắp bí mật. Anh và đội của mình phải đối mặt với các nguy hiểm và thử thách phức tạp trong thế giới của giấc mơ đồng thời.',
        },
        name: 'Inception',
        director: 'Christopher Nolan',
        time: '148 phút',
        releaseDate: '2010',
        preview: 'https://www.youtube.com/embed/YoHD9XEInc0?si=NjLN2cSy9UhkU9w2',
        rating: 8.8,
        language: 'English',
        country: 'USA',
        budget: '$160 triệu',
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        storyline: `Inception is a science fiction and action film that follows the exploits of Dom Cobb, a skilled thief who specializes in stealing valuable information by entering the dreams of others. Cobb and his team must navigate complex and dangerous challenges in the world of shared dreams.`,
        genre: ['Khoa học viễn tưởng', 'Hành động', 'Hồi hộp'],
        studio: 'Warner Bros. Pictures'
    },
    {
        id: 8,
        image: 'https://flxt.tmsimg.com/assets/p40_v_v12_sk.jpg',
        imageBackdrop: 'https://images2.thanhnien.vn/uploaded/minhnguyet/2018_06_14/the-shining2_SDND.jpg?width=500',
        details: {
            short: 'Một người đàn ông trở thành người gác cửa trong một khách sạn bỏ hoang, và anh dần mất trí.',
            full: 'The Shining là một bộ phim kinh dị dựa trên tiểu thuyết của Stephen King. Phim kể về Jack Torrance, một người đàn ông trở thành người gác cửa trong một khách sạn bỏ hoang cách xa. Khi mất trí, anh trở nên nguy hiểm cho gia đình mình.',
        },
        name: 'The Shining',
        director: 'Stanley Kubrick',
        time: '146 phút',
        releaseDate: '1980',
        preview: 'https://www.youtube.com/embed/S014oGZiSdI?si=h6ocTWf3B-ViP5D',
        rating: 8.4,
        language: 'English',
        country: 'USA',
        budget: '$19 triệu',
        cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
        storyline: `The Shining is a psychological horror film based on Stephen King's novel. Jack Torrance, a man struggling with his own demons, becomes the winter caretaker at the remote Overlook Hotel. As he descends into madness, the hotel's supernatural forces pose a threat to his family.`,
        genre: ['Kinh dị', 'Thần bí'],
        studio: 'Warner Bros. Pictures'
    },
    {
        id: 9,
        image: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        imageBackdrop: 'https://i.ytimg.com/vi/mxphAlJID9U/maxresdefault.jpg',
        details: {
            short: 'Một doanh nhân Đức cố gắng cứu sống nhiều người Do Thái khỏi Holocaust.',
            full: 'Schindler\'s List là một bộ phim lịch sử kể về Oskar Schindler, một doanh nhân Đức cố gắng cứu sống nhiều người Do Thái khỏi Holocaust bằng cách tạo ra một danh sách những người làm việc trong nhà máy của anh. Phim được đạo diễn bởi Steven Spielberg.',
        },
        name: 'Schindler\'s List',
        director: 'Steven Spielberg',
        time: '195 phút',
        releaseDate: '1993',
        preview: 'https://www.youtube.com/embed/gG22XNhtnoY?si=6vAzJcLd4PzuirKc',
        rating: 8.9,
        language: 'English',
        country: 'USA',
        budget: '$22 triệu',
        cast: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
        storyline: `Schindler's List is a historical drama that tells the story of Oskar Schindler, a German businessman who saves many Jewish lives during the Holocaust by creating a list of workers for his factory. The film is a powerful portrayal of one man's efforts to make a difference amid the horrors of war.`,
        genre: ['Lịch sử', 'Drama', 'Chiến tranh'],
        studio: 'Universal Pictures'
    },
];

export default listOfFilms;
