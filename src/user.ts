import { renderBlock } from './lib.js'

export function renderUserBlock (userName:string, avatarImg:string, favoriteItemsAmount:number) {
  const favoritesCaption = favoriteItemsAmount > 0 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarImg}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
