const pageStyles = {
    homePageStyles: {
        boxContainer: {
            marginY: '50px'
        },
        heroContent: {
            width: 'fit-content'
        },
        heroContent1: {
            fontWeight: 700,
            fontSize: {
                xs: '20px',
                sm: '24px',
                md: '34px',
                lg: '44px',
                xl: '48px'
            }
        },
        heroContent2: {
            color: '#727272',
            fontSize: {
                xs: '12px',
                sm: '14px',
                md: '16px',
                lg: '18px',
                xl: '20px'
            }
        },
        heroButton: {
            padding: '10px 16px',
            fontSize: {
                xs: '12px',
                sm: '14px',
                lg: '16px',
                xl: '18px'
            },
            textTransform: 'capitalize',
            width: 'fit-content',
            backgroundColor: 'orange',
            borderRadius: '30px',
            boxShadow: 'unset',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'orange'
            }
        },
        information1: {
            marginTop: {
                xs: '100px',
                sm: '140px'
            }
        },
        informationCardContainer: {
            width: {
                md: '100%'
            }
        },
        informationIcon: {
            color: 'orange',
            fontSize: {
                lg: '30px'
            } 
        },
        information2: {
            marginTop: {
                xs: '80px',
                sm: '160px'
            }
        },
        information2Content: {
            fontWeight: 600,
            color: 'orange',
            fontSize: {
                md: '18px',
                xl: '20px'
            }
        },
        foodBenefitsContainer: {
            marginTop: {
                xs: '100px',
                sm: '200px'
            }
        },
        foodBenefits: {
            minWidth: '240px' 
        },
        foodBenefitsContent1: {
            fontWeight: 600,
            color: 'orange',
            fontSize: {
                md: '18px',
                xl: '20px'
            } 
        },
        foodBenefitsContent2: {
            fontWeight: 300,
            fontSize: {
                md: '18px'
            } 
        },
        recommendedMenuContainer: {
            marginTop: {
                xs: '80px',
                sm: '160px'
            } 
        },
        recommendedMenuContent1: {
            fontWeight: 600,
            color: 'orange',
            fontSize: {
                md: '18px',
                xl: '20px'
            } 
        },
        recommendedMenuContent2: {
            textAlign: 'center',
            fontSize: {
                md: '18px'
            } 
        },
        recommendedMenuImagesContainer: {
            marginTop: {
                xs: '30px',
                sm: '60px'
            } 
        },
        exploreContainer: {
            marginTop: {
                xs: '70px',
                sm: '140px'
            } 
        },
        exploreContent: {
            fontWeight: 600,
            color: 'orange',
            fontSize: {
                md: '18px',
                xl: '20px'
            } 
        },
        exploreButton: {
            padding: '10px 16px',
            fontSize: {
                xs: '12px',
                sm: '14px',
                lg: '16px',
                xl: '18px'
            },
            textTransform: 'capitalize',
            width: 'fit-content',
            backgroundColor: 'orange',
            borderRadius: '30px',
            boxShadow: 'unset',
            ':hover': {
                boxShadow: 'unset',
                backgroundColor: 'orange'
            } 
        }
    },
    mainPageStyles: {
        boxContainer: {
            marginY: '50px'
        },
        boxFormContainer: {
            borderRadius: {
                xs: '20px'
            },
            backgroundColor: 'white',
            boxShadow: '0px 1px 17px rgba(0, 0, 0, 0.25)',
            padding: '30px',
            boxSizing: 'border-box' 
        },
        boxFormContent: {
            fontWeight: 600
        },
        emptyStateContainer: {
            marginY: '80px'
        },
        emptyStateContent: {
            fontSize: {
                xs: '20px',
                sm: '24px'
            } 
        },
        gridContainer: {
            marginTop: '60px'
        },
        pagination: {
            '.MuiPaginationItem-root': {
                fontWeight: {
                    xs: 500,
                    sm: 600
                }
            } ,
            '.MuiPaginationItem-root.Mui-selected': {
                backgroundColor: 'orange'
            },
            marginTop: '100px',
            ':hover': {
                color: 'orange'
            } 
        }
    },
    cartPageStyles: {
        emptyStateContent: {
            fontSize: {
                xs: '20px',
                sm: '24px'
            }    
        },
        cartsContainer: {
            marginTop: '50px' 
        },
        cartItemName: {
            width: {
                xs: '80px'
            },
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis' 
        },
        divider: {
            borderColor: '#727272',
            borderWidth: '2px',
            borderRadius: '2px' 
        },
        tableContainer: {
            marginTop: '50px'
        },
        tableHeadContent1: {
            fontWeight: 500,
            paddingX: 0,
            paddingLeft: {
                md: '38px',
                lg: '80px',
                xl: '100px'
            },
            paddingRight: {
                md: '44px'
            },
            borderColor: 'black' 
        },
        tableHeadContent2: {
            fontWeight: 500,
            paddingX: 0,
            borderColor: 'black' 
        },
        tableHeadContent3: {
            fontWeight: 500,
            paddingX: 0,
            borderColor: 'black' 
        },
        tableHeadContent4: {
            fontWeight: 500,
            paddingX: 0,
            paddingRight: '10px',
            borderColor: 'black' 
        },
        tableRowContainer: {
            '&:last-child td, &:last-child th': {
                border: 0
            } 
        },
        tableRowContent1: {
            paddingX: 0,
            paddingY: '50px',
            width: {
                lg: '380px'
            } 
        },
        tableRowContent2: {
            paddingX: 0,
            paddingY: '50px' 
        },
        tableRowContent3: {
            paddingX: 0,
            paddingY: '50px'
        },
        tableRowContent4: {
            paddingX: 0,
            paddingY: '50px'
        },
    },
    addressPageStyles: {
        descriptionContainer: {
            marginTop: '100px',
            marginBottom: '66px'
        },
        descriptionContent: {
            fontWeight: 500
        },
        tableHeadContent1: {
            paddingX: 0,
            paddingY: '16px',
            paddingLeft: '6px',
            paddingRight: {
                xs: '30px',
                sm: '70px',
                md: '130px'
            },
            borderColor: 'black'
        },
        tableHeadContent2: {
            paddingX: 0,
            paddingY: '16px',
            paddingRight: {
                xs: '46px',
                sm: '80px',
                md: '150px'
            },
            borderColor: 'black'
        },
        tableHeadContent3: {
            paddingX: 0,
            paddingY: '16px',
            borderColor: 'black'
        },
        tableRowContainer: {
            '&:last-child td, &:last-child th': {
                border: 0
            }
        },
        tableCell: {
            paddingX: 0,
            paddingY: '50px' 
        },
        tableContent: {
            fontWeight: 500
        },
        radio: {
            padding: 0,
            paddingLeft: '12px',
            color: 'orange',
            '&.Mui-checked': {
                color: 'orange'
            } 
        }
    },
    checkoutPageStyles: {
        descriptionContainer: {
            marginTop: '100px',
            marginBottom: '66px' 
        },
        descriptionContent: {
            fontWeight: 500
        },
        tableHeadContent1: {
            padding: 0,
            border: 'unset',
            paddingRight: {
                xs: '134px',
                sm: '186px',
                md: '288px',
                lg: '410px'
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
        },
        tableContent1: {
            key: {
                fontWeight: 500
            },
            value: {
                content1: {
                    fontWeight: 500
                },
                content2: {
                    wordBreak: 'break-words'
                }
            }
        },
        
        tableContent2: {
            key: {
                fontWeight: 500
            },
            value: {
                color: 'orange'
            }
        },
        tableContent3: {
            key: {
                fontWeight: 500
            },
            value: {
                color: 'orange'
            }
        },
        tableContent4: {
            key: {
                fontWeight: 500,
                color: 'orange'
            },
            value: {
                fontWeight: 500,
                color: 'orange'
            }
        }
    },
    invoicePageStyles: {
        tableContainer: {
            marginTop: '66px'
        },
        tableHeadContent1: {
            padding: 0,
            border: 'unset',
            paddingRight: {
                xs: '150px', sm: '176px', md: '268px', lg: '418px'
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
        },
        tableContent1: {
            key: {
                fontWeight: 500
            },
            value: {
                wordBreak: 'break-all'
            }
        },
        tableContent2: {
            key: {
                fontWeight: 500
            },
            value: {
                fontWeight: 500,
                wordBreak: 'break-all' 
            }
        },
        tableContent3: {
            key: {
                fontWeight: 500
            },
            value: {
                fontWeight: 500, color: 'orange' 
            }
        },
        tableContent4: {
            key: {
                fontWeight: 500
            },
            value: {
                content1: {
                    fontWeight: 500
                },
                content2: {
                    fontSize: '14px',
                    color: '#727272',
                    wordBreak: 'break-all' 
                }
            }
        },
        tableContent5: {
            key: {
                fontWeight: 500
            },
            value: {
                content1: {
                    fontWeight: 500
                },
                content2: {
                    fontSize: '14px',
                    color: '#727272',
                    wordBreak: 'break-all' 
                }
            }
        },
    },
    accountPageStyles: {
        tabs: {
            marginTop: '66px',
            '.MuiTabs-indicator': {
                backgroundColor: 'orange',
                height: '4px',
                borderRadius: '4px'
            },
            '.MuiTabs-scroller': {
                overflowX: 'auto !important'
            } 
        },
        tab: {
            padding: '12px 9px',
            textTransform: 'capitalize',
            minWidth: 'fit-content',
            '&.Mui-selected': {
                color: 'orange'
            } 
        },
    }
};

export const {
    homePageStyles,
    mainPageStyles,
    cartPageStyles,
    addressPageStyles,
    checkoutPageStyles,
    invoicePageStyles,
    accountPageStyles
} = pageStyles;