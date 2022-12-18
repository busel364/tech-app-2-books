export const base_url = 'http://localhost:5000';

export const carouselPhotos = ['https://img2.akspic.ru/crops/2/2/1/5/3/135122/135122-rabota-kniga-stellazh-arhitektura-etazherka-1920x1080.jpg',
    'https://img2.akspic.ru/crops/6/2/3/9/4/149326/149326-derevo-rastenie-natyurmort-osen-listopadnye-1920x1080.jpg',
    'https://img1.akspic.ru/crops/8/2/6/9/3/139628/139628-noutbuk-avtor-chtenie-drevesina-kniga-1920x1080.jpg'];

export const navItems = [{ name: 'Home', route: '' }, { name: 'Shop', route: 'shop' }, { name: 'Cafe', route: 'cafe' }, { name: 'Contact', route: 'contact' }]

export const navItemsRightSide = [
    { img: 'https://cdn-icons-png.flaticon.com/512/2/2267.png', route: 'wish_list' },
    { img: 'https://cdn-icons-png.flaticon.com/512/1374/1374128.png', route: 'check_out' },
    { img: 'http://mipt-telecom.ru/wp-content/uploads/2017/01/d8d47af9059b6b3f12e47ea6014c966d.png', route: 'personal_area' }]


export const menuDrinks = [{ name: 'Hot Drinks', indexName: 'hotDrinks' }, { name: 'Iced Drinks', indexName: 'coldDrinks' }];

export const dataCafeImg = ['https://avatars.mds.yandex.net/get-altay/1372264/2a00000165cde11bd69c81ab060c90149bf8/XXL',
    'https://gcdn.tomesto.ru/img/place/000/022/574/kafe-biblioteka-na-novoorlovskoy-ulitse_aa320_full-348938.jpg',
    'https://img.restoclub.ru/uploads/place/4/3/c/4/43c48debc06afcf0f43bed5862203c10_w1200_h630.jpg',
    'https://old.leclick.ru/i/files/restaurants/photo/843457.jpg',
    'https://s.restorating.ru/w/1920x1080/articles/2762/photo_2022-06-01_14-43-18.jpg',
    'http://cultmoscow.com/wp-content/uploads/images/k97a9444_small0e0.jpg',
    'https://image.eatout.ru/imager/0000/0000/0000/0096/1672/400x/961672.jpeg',
    'https://avatars.mds.yandex.net/get-altay/1360498/2a00000165cde1151996d218d4f8d12fa8e9/XXL',
    'https://avatars.mds.yandex.net/get-altay/947364/2a00000165cde11505d84dc52c77ce8ab7b5/XXXL',
    'https://avatars.mds.yandex.net/get-altay/1344805/2a00000165cde11529fad5cf8c89a563353c/XXXL',
    'https://avatars.mds.yandex.net/get-altay/235931/2a0000015cedc83e0a6d37b2b0b46652b867/XXXL',
    'https://avatars.mds.yandex.net/get-altay/1547687/2a0000016cb8f04db4c8dc1c58ea2c7abb55/XXXL'];

    
export const base_url_login = 'https://webaccounting.herokuapp.com/account'
export const createToken = (login: string, password: string) => {
    return `Basic ${window.btoa(login + ':' + password)}`;
}