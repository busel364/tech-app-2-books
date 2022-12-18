import React from 'react'

const Contact = () => {
    return (
        <div className='pt-5'>
            <h1 className='mt-5 text-center'>Contact</h1>
            <div className='mt-3 contactBlock container'>
                <p className='ms-3 pt-4'>If you need more inforamation, just contact me somewhere
                </p>
                <div>
                    <a href='https://t.me/busel364'>
                        <img
                            className='contactImg'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Telegram_font_awesome.svg/1200px-Telegram_font_awesome.svg.png'
                            alt='telegramImg'
                            title='telegram'
                        />
                    </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/ngc606/'>
                        <img
                            className='contactImg'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/768px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png?20170817060151'
                            alt='instagram'
                            title='instagram'
                        />
                    </a>
                </div>
                <div>
                    <a href='https://t.me/busel364'>
                        <img
                            className='contactImg'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/768px-Facebook_icon_%28black%29.svg.png?20160411105641'
                            alt='facebook'
                            title='use tg not facebook))'
                        />
                    </a>
                </div>
                <div>
                    <a href='https://github.com/busel364'>
                        <img
                            className='contactImg'
                            src='https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg'
                            alt='gitHub'
                            title='gitHub'
                        />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Contact
