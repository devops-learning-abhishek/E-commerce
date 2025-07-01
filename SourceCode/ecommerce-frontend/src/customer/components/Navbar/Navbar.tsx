import { Avatar, Box, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { FavoriteBorder, LocalMallRounded, MenuRounded, AccountCircle } from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../data/category/mainCategory';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../state/Store';

const Navbar = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [selectedCategory, setSelectedCategory] = useState("men");
    const [showCategorySheet, setShowCategorySheet] = useState(false);
    const navigate = useNavigate();
    const { auth } = useAppSelector(store => store);

    return (
        <nav className="sticky top-0 z-50 shadow-lg bg-white navbar-expand-lg">
            <Box className="left-0 right-0" sx={{ zIndex: 2 }}>
                <div className='flex items-center justify-between px-7 lg:px-20 h-[70px]'>

                    <div className='flex items-center gap-9'>
                        <div className='flex items-center gap-2'>

                            {!isLarge &&
                                <IconButton>
                                    <MenuRounded />
                                </IconButton>
                            }

                            <h1 onClick={() => navigate("/")} className='logo cursor-pointer md:text-2xl'>
                                ZyraCart
                            </h1>
                        </div>

                        <ul className='flex items-center text-md font-medium text-gray-500'>
                            {mainCategory.map((item) =>
                                <li
                                    onMouseLeave={() => { setShowCategorySheet(false); }}
                                    onMouseEnter={() => {
                                        setShowCategorySheet(true);
                                        setSelectedCategory(item.categoryId);
                                    }}
                                    className='mainCategory hover:text-[#006699] hover:border-b-2 h-[70px] px-4 border-[#006699] flex items-center'>
                                    {item.name}
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="flex gap-3 lg:gap-3 items-center">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="border shadow border-gray-300 mr-10 px-6 py-1.5 rounded-full w-90 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                        />

                        {
                            auth.user ? <IconButton onClick={() => navigate("/account")} className='flex items-center'>
                                <Avatar
                                    sx={{ width: 30, height: 30 }}
                                    src='https://yt3.ggpht.com/yti/ANjgQV_k7iRwvFCVykRzSfsa4Zv0fSnmR7P9KI50VQY3kYjJnbM=s88-c-k-c0x00ffffff-no-rj'
                                />
                                {/* <h1 className="hidden font-semibold lg:block text-sm ml-2">{auth.user?.fullName}</h1> */}
                            </IconButton> :
                                // <Button className='h-8' variant='contained'>Login</Button>
                                <IconButton onClick={() => navigate("/login")}>
                                    <AccountCircle className='text-gray-600' sx={{ width: 35, height: 35 }} />
                                </IconButton>
                        }

                        <IconButton onClick={() => navigate("/wishlist")}>
                            <FavoriteBorder className='text-gray-600' sx={{ fontSize: 32 }} />
                        </IconButton>
                        <IconButton onClick={() => navigate("/cart")}>
                            <LocalMallRounded className='text-gray-600' sx={{ fontSize: 30 }} />
                        </IconButton>

                        {/* {
                        isLarge && <Button startIcon={<Storefront/>} variant='outlined'>
                            Become seller
                        </Button>
                    } */}
                    </div>
                </div>
                {showCategorySheet && <div
                    onMouseLeave={() => setShowCategorySheet(false)}
                    onMouseEnter={() => setShowCategorySheet(true)}
                    className='categorySheet absolute top-[4.4rem] left-20 right-20 shadow'>
                    <CategorySheet selectedCategory={selectedCategory} />
                </div>}
            </Box>
        </nav>
    )
}

export default Navbar
