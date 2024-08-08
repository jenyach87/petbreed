export const API = {
  getData:{
    dog: ` ${process.env.NEXT_PUBLIC_DOMAIN_DOG}/images/search`,
    cat:` ${process.env.NEXT_PUBLIC_DOMAIN_CAT }/images/search` ,
  },
  getCard: {
    dog:`${process.env.NEXT_PUBLIC_DOMAIN_DOG}/images`,
    cat: ` ${process.env.NEXT_PUBLIC_DOMAIN_CAT}/images`,
  }
}