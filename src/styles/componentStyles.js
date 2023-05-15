const componentStyles = {
    addressFormComponentStyles: {
        container: {
            marginTop: '30px'
        },
        infoContainer: {
            xs: 'center',
            sm: 'flex-start'
        },
        addButton: {
            textTransform: 'capitalize',
            width: 'fit-content',
            height: 'fit-content',
            boxShadow: 'unset',
            backgroundColor: 'orange',
            borderRadius: '30px',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'orange'
            }
        },
    },
    addressPanelComponentStyles: {
        emptyStateContainer: {
            marginY: {
                xs: '25px',
                sm: '50px'
            }
        },
        container: {
            marginTop: '50px'
        },
        tableHeadContent1: {
            padding: 0,
            paddingRight: { xs: '84px', sm: '74px', md: '214px', lg: '364px', xl: '462px' },
            paddingY: '16px',
            borderColor: 'black'
        },
        tableHeadContent2: {
            padding: 0,
            paddingY: '16px',
            borderColor: 'black'
        },
        tableRow: {
            '&:last-child td, &:last-child th': {
                border: 0
            }
        },
        tableCell: {
            paddingX: 0,
            paddingY: '50px'
        }
    },
    backwardFordwardComponentStyles: {
        container: {
            marginTop: '100px'
        },
        backButton: {
            textTransform: 'capitalize',
            color: 'orange',
            ':hover': {
                backgroundColor: 'unset'
            }
        },
        nextButton: {
            textTransform: 'capitalize',
            width: 'fit-content',
            height: 'fit-content',
            boxShadow: 'unset',
            backgroundColor: 'orange',
            borderRadius: '30px',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'orange'
            }
        }
    },
    boxContainerComponentStyles: {
        boxContainer: {
            marginY: '50px',
            boxSizing: 'border-box',
            borderRadius: '20px',
            backgroundColor: 'white',
            boxShadow: '0px 1px 17px rgba(0, 0, 0, 0.25)',
            position: 'relative'
        },
        titleContainer: {
            paddingTop: {
                xs: '25px',
                sm: '50px'
            },
            paddingX: {
                xs: '25px',
                sm: '40px',
                md: '50px'
            }
        },
        title: {
            fontWeight: 600
        },
        buttonLogout: {
            color: 'red',
            padding: 0,
            textTransform: 'capitalize',
            position: 'absolute',
            right: {
                xs: '14px',
                sm: '30px',
                md: '40px'
            },
            ':hover': {
                backgroundColor: 'unset'
            }
        },
        children: {
            paddingX: {
                xs: '25px',
                sm: '40px',
                md: '50px'
            }
        },
        divider: {
            borderWidth: '2px',
            borderColor: 'orange',
            marginTop: '30px'
        },
        endContent: {
            paddingBottom: {
                xs: '25px',
                sm: '50px'
            },
            paddingX: {
                xs: '25px',
                sm: '40px',
                md: '50px'
            }
        }
    },
    cartNavigationComponentStyles: {
        container: {
            marginTop: '100px'
        },
        subtotal: {
            fontWeight: 500
        },
        price: {
            fontWeight: 500,
            color: 'orange'
        },
        nextButton: {
            textTransform: 'capitalize',
            width: 'fit-content',
            height: 'fit-content',
            boxShadow: 'unset',
            backgroundColor: 'orange',
            borderRadius: '30px',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'orange'
            }
        }
    },
    chipComponentStyles: {
        chip: (borderColor, color, backgroundColor, hover) => ({
            fontWeight: 500,
            width: 'fit-content',
            border: `1px solid ${borderColor}`,
            color: color, backgroundColor:
                backgroundColor,
            ':hover': {
                backgroundColor: hover
            }
        })
    },
    counterComponentStyles: {
        iconButton: {
            padding: 0,
            backgroundColor: 'orange',
            ":hover": {
                backgroundColor: 'orange'
            }
        },
        icon: {
            color: 'white'
        }
    },
    dropdownComponentStyles: {
        autoComplete: {
            '.MuiOutlinedInput-root': {
                padding: 0
            },
            '.MuiAutocomplete-clearIndicator': {
                color: 'orange'
            }
        },
        textField: {
            '.MuiOutlinedInput-input': {
                height: {
                    xs: '25px',
                    sm: '35px'
                }
            },
            '.MuiOutlinedInput-root .MuiAutocomplete-input': {
                padding: '8.5px 14px'
            },
            '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange'
            },
            '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange'
            }
        },
        loading: {
            color: 'orange'
        }
    },
    foodItemComponentStyles: {
        stackContainer: {
            width: {
                xs: '240px',
                sm: '336px',
                lg: '462px'
            }
        },
        boxContainer: {
            width: {
                xs: '190px',
                sm: '256px',
                lg: '361px'
            },
            borderRadius: {
                xs: '14px',
                sm: '20px'
            },
            boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.29)',
            position: 'relative'
        },
        productInformationContainer: {
            paddingTop: {
                xs: '10px',
                sm: '20px'
            },
            paddingX: '30px'
        },
        productName: {
            fontSize: {
                xs: '20px',
                md: '24px',
                lg: '28px'
            }
        },
        star: {
            borderRadius: '20px',
            color: 'orange',
            fontSize: {
                xs: '18px',
                sm: '22px',
                lg: '28px'
            }
        },
        productPrice: {
            color: 'orange',
            fontSize: {
                lg: '20px'
            }
        },
        iconContainer: {
            padding: '6px 26px',
            backgroundColor: 'orange',
            borderBottomLeftRadius: {
                xs: '14px',
                sm: '20px'
            },
            borderBottomRightRadius: {
                xs: '14px',
                sm: '20px'
            }
        },
        icon: {
            fontSize: {
                lg: '34px'
            }
        }
    },
    footerComponentStyles: {
        divider: {
            borderWidth: '2px',
            borderColor: 'orange'
        },
        container: {
            backgroundColor: 'white',
            paddingY: '30px',
            paddingX: {
                xs: '20px',
                sm: '100px'
            },
            marginX: 0,
            maxWidth: {
                lg: '100%'
            }
        },
        stackContainer: {
            width: {
                xs: '100%',
                md: 'auto'
            }
        },
        contentParent: {
            fontWeight: 500
        },
        contentChild: {
            color: '#727272'
        }
    },
    gridItemComponentStyles: {
        boxContainer: {
            width: { xs: '240px', sm: '300px' },
            borderRadius: '20px',
            boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.29)',
            backgroundColor: 'white',
            position: 'relative'
        },
        contentContainer: {
            paddingTop: '20px',
            paddingX: '30px'
        },
        tags: {
            fontWeight: 500,
            fontSize: '12px',
            padding: '5px 10px',
            backgroundColor: 'orange',
            color: 'white',
            borderRadius: '30px',
            width: 'fit-content'
        },
        tagName: {
            fontWeight: 500,
            fontSize: {
                xs: '24px'
            },
            textAlign: 'left',
            width: {
                xs: '180px',
                sm: '240px'
            },
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        price: {
            fontWeight: 500,
            color: 'orange',
            textAlign: 'left'
        },
        iconContainer: {
            padding: '6px 26px',
            backgroundColor: 'orange',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            cursor: 'pointer'
        }
    },
    headerComponentStyles: {
        headerContainer: {
            paddingTop: '44px',
            paddingX: {
                xs: '20px',
                sm: '100px'
            } 
        },
        boxCategory: {
            positon: 'relative'
        },
        iconButton: {
            padding: 0,
            border: '1px solid orange',
            backgroundColor: 'white',
            ':hover': {
                backgroundColor: 'white'
            } 
        },
        icon : {
            color: 'black',
            padding: '4px' 
        },
        categoryDialog: {
            paddingY: '30px',
            paddingX: '36px',
            borderRadius: '20px',
            boxSizing: 'border-box',
            zIndex: 2,
            width: '199px',
            position: 'absolute',
            right: {
                xs: '86px', sm: '226px !important'
            },
            top: '90px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.29)'
        },
        categoryDialogContent: {
            fontWeight: 600
        },
        categoryListContainer: {
            height: '90px',
            overflowY: 'auto' 
        },
        categoryButton: (color) => ({
            padding: 0,
            color: color,
            justifyContent: 'flex-start',
            width: 'fit-content',
            textTransform: 'capitalize' 
        }),
        badge: {
            '& .MuiBadge-badge': {
                backgroundColor: 'white',
                border: '2px solid orange',
                color: 'black',
                fontSize: '14px',
                fontWeight: 600
            } 
        },
        navigationMenuDialog: {
            position: 'absolute',
            left: '-210px',
            width: {
                xs: '240px'
            },
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '3px 4px 13px rgba(0, 0, 0, 0.29)'
        },
        linkContainerXS: {
            paddingTop: '20px',
            paddingBottom: '15px',
            paddingX: '30px' 
        },
        linkXS: {
            fontSize: {
                xs: '14px',
                sm: '16px'
            },
            fontWeight: 500,
            fontFamily: 'Poppins',
            color: 'black',
            cursor: 'pointer' 
        },
        buttonContainerXS: {
            paddingTop: '15px',
            paddingBottom: '20px',
            paddingX: '30px' 
        },
        loginButtonXS: {
            fontSize: {
                sm: '16px'
            },
            color: 'orange',
            padding: 0,
            justifyContent: 'flex-start',
            textTransform: 'capitalize',
            ':hover': {
                backgroundColor: 'unset'
            } 
        },
        signUpButtonXS: {
            fontSize: {
                sm: '16px'
            },
            color: 'orange',
            padding: 0,
            justifyContent: 'flex-end',
            textTransform: 'capitalize',
            ':hover': {
                backgroundColor: 'unset'
            } 
        },
        linkMD: {
            fontFamily: 'Poppins',
            fontSize: {
                lg: '20px'
            },
            fontWeight: 500,
            color: 'black',
            cursor: 'pointer' 
        },
        loginButtonMD: {
            fontSize: {
                lg: '20px'
            },
            textTransform: 'capitalize',
            padding: '5px 15px',
            borderRadius: '30px',
            color: 'black',
            backgroundColor: 'rgba(255, 255, 255, 0.70)',
            boxShadow: 'unset',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'rgba(255, 255, 255, 0.70)'
            } 
        },
        signUpButtonMD: {
            fontSize: {
                lg: '20px'
            },
            textTransform: 'capitalize',
            padding: '5px 15px',
            borderRadius: '30px',
            color: 'black',
            backgroundColor: 'rgba(255, 255, 255, 0.70)',
            boxShadow: 'unset',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'rgba(255, 255, 255, 0.70)'
            } 
        },
        backdrop: {
            color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 
        }
    },
    informationCardComponentStyles: {
        container: {
            width: {
                xs: '240px',
                sm: '400px',
                md: '200px',
                lg: '286px',
                xl: '356px'
            },
            backgroundColor: 'white',
            borderRadius: {
                xs: '20px'
            },
            boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.29)'
        },
        contentContainer: {
            height: '100%',
            paddingY: '18px',
            boxSizing: 'border-box'
        },
        centerContent: {
            fontWeight: 500,
            fontSize: {
                xs: '14px',
                md: '16px'
            },
            textAlign: 'center',
            width: {
                xs: '200px',
                sm: '300px',
                md: '150px',
                lg: '220px',
                xl: '300px'
            }
        },
        endContent: {
            color: '#727272',
            textAlign: 'center',
            fontSize: {
                xs: '14px',
                md: '16px'
            },
            width: {
                xs: '200px',
                sm: '300px',
                md: '150px',
                lg: '220px',
                xl: '300px'
            }
        }
    },
    itemOrderedComponentStyles: {
        divider: {
            borderColor: 'white',
            borderWidth: '1px'
        },
        boxContainer: {
            backgroundColor: 'orange',
            borderRadius: '15px',
            marginX: '0.6px' 
        },
        boxContainerXsSm: {
            paddingTop: '50px',
            paddingBottom: '30px',
            paddingX: '30px'
        },
        icon: (color) => ({
            color,
            cursor: 'pointer'
        }),
        orderSummaryXS: {
            padding: '30px'
        },
        detailButtonXS: {
            backgroundColor: 'white',
            color: 'orange',
            textTransform: 'capitalize',
            boxShadow: 'unset',
            borderRadius: '30px',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'white'
            } 
        },
        orderDetailSmContent: {
            padding: 0,
            paddingY: '30px',
            borderBottom: '2px solid white'
        },
        tableHeadSMContent: {
            padding: 0,
            border: 'unset'
        },
        tableRowSM: {
            '&:last-child td, &:last-child th': {
                border: 0,
                paddingBottom: 0
            } 
        },
        orderSummaryMD: (show, index, ordersLength) => ({
            paddingTop: '50px',
            paddingBottom: show ? '50px' : (index === ordersLength ? 0 : '50px'),
            borderBottom: show ? '1px solid rgba(224, 224, 224, 1)' : (index === ordersLength ? 'unset' : '1px solid rgba(224, 224, 224, 1)')
        }),
        orderDetailMdContainer: (show) => ({
            paddingBottom: 0, paddingTop: show ? '50px' : 0, paddingLeft: '35px', paddingRight: '35px', borderBottom: 0 
        }),
        tableHeadMdContent: {
            padding: 0,
            paddingY: '30px',
            width: '200px',
            borderColor: 'black'
        },
        tableRowMD: {
            '&:last-child td, &:last-child th': {
                border: 0,
                paddingBottom: 0
            }
        },
        orderDetailMdContent: {
            padding: 0,
            paddingY: '30px' 
        },
        detailButtonMD: {
            textTransform: 'capitalize',
            backgroundColor: 'orange',
            color: 'white',
            boxShadow: 'unset',
            borderRadius: '30px',
            ':hover': {
                backgroundColor: 'orange'
            } 
        }
    },
    loginFormComponentStyles: {
        boxContainer: {
            width: {
                sm: '400px',
                md: '700px'
            },
            marginX: {
                xs: '20px'
            },
            padding: {
                xs: '26px',
                sm: '50px'
            },
            backgroundColor: 'white',
            borderRadius: '20px',
            boxSizing: 'border-box'
        },
        titleContainer: {
            width: '100%'
        },
        title: {
            color: 'black'
        },
        iconButton: {
            padding: 0
        },
        closeIcon: {
            color: 'black',
            ':hover': {
                color: 'red'
            }
        },
        formContainer: {
            width: '100%'
        },
        loginButtonContainer: {
            width: '100%'
        },
        loginButton: {
            padding: {
                xs: '8px 30px',
                sm: '10px 40px'
            },
            textTransform: 'capitalize',
            backgroundColor: 'orange',
            color: 'white',
            boxShadow: 'unset',
            borderRadius: '30px',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'orange'
            }
        }
    },
    orderedPanelComponentStyles: {
        container: {
            marginTop: '30px'
        },
        emptyStateContainer: {
            marginTop: {
                xs: '25px',
                sm: '50px'
            } 
        },
        tableCell: {
            paddingX: 0,
            borderColor: 'black'
        }
    },
    profileComponentStyles: {
        tableHeadContent1: {
            padding: 0,
            border: 'unset',
            paddingRight: {
                xs: '84px',
                sm: '100px',
                md: '130px',
                lg: '142px',
                xl: '148px'
            } 
        },
        tableHeadContent2: {
            padding: 0,
            border: 'unset'
        },
        tableRow: {
            '&:last-child td, &:last-child th': {
                border: 0
            }
        },
        tableCell: {
            paddingX: 0,
            paddingY: '50px',
            borderColor: '#727272',
            borderWidth: '3px' 
        }
    },
    signUpFormComponentStyles: {
        boxContainer: {
            width: {
                sm: '400px',
                md: '700px'
            },
            marginX: {
                xs: '20px'
            },
            padding: {
                xs: '26px',
                sm: '50px'
            },
            backgroundColor: 'white',
            borderRadius: '20px',
            boxSizing: 'border-box'
        },
        titleContainer: {
            width: '100%'
        },
        title: {
            color: 'black'
        },
        iconButton: {
            padding: 0
        },
        closeIcon: {
            color: 'black',
            ':hover': {
                color: 'red'
            } 
        },
        formContainer: {
            width: '100%'
        },
        signUpButtonContainer: {
            width: '100%'
        },
        signUpButton: {
            padding: {
                xs: '8px 30px',
                sm: '10px 40px'
            },
            textTransform: 'capitalize',
            backgroundColor: 'orange',
            color: 'white',
            boxShadow: 'unset',
            borderRadius: '30px',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'orange'
            } 
        }
    },
    textAreaComponentStyles: {
        textField: {
            '.MuiOutlinedInput-root': {
                padding: '8.5px 14px',
                height: {
                    xs: '110px',
                    sm: '120px'
                }
            }, 
            '.MuiOutlinedInput-input': {
                height: '100px !important',
                overflow: 'auto !important'
            },
            '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange'
            },
            '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange'
            }
        }
    },
    textFieldSmallComponentStyles: {
        label: {
            color: 'black'
        },
        textField: {
            '.MuiOutlinedInput-input': { height: { xs: '9px', sm: '19px' } },
            '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'orange' },
            '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'orange' }
        }
    },
    textFieldMediumComponentStyles: {
        textField: {
            width: '100%',
            '.MuiOutlinedInput-root': {
                borderRadius: '35px'
            },
            '.MuiOutlinedInput-notchedOutline': {
                borderWidth: '2px',
                borderColor: 'orange'
            },
            '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange'
            },
            '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange'
            }
        },
        icon: {
            color: 'orange'
        },
        button: {
            color: 'white',
            width: {
                md: '118px'
            },
            backgroundColor: 'orange',
            boxShadow: 'unset',
            borderRadius: '20px',
            textTransform: 'capitalize',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'orange'
            }
        }
    }
};

export const {
    addressFormComponentStyles,
    addressPanelComponentStyles,
    backwardFordwardComponentStyles,
    boxContainerComponentStyles,
    cartNavigationComponentStyles,
    chipComponentStyles,
    counterComponentStyles,
    dropdownComponentStyles,
    foodItemComponentStyles,
    footerComponentStyles,
    gridItemComponentStyles,
    headerComponentStyles,
    informationCardComponentStyles,
    itemOrderedComponentStyles,
    loginFormComponentStyles,
    orderedPanelComponentStyles,
    profileComponentStyles,
    signUpFormComponentStyles,
    textAreaComponentStyles,
    textFieldSmallComponentStyles,
    textFieldMediumComponentStyles
} = componentStyles;