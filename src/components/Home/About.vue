<template>
  <article>
    <div class="text">
      <header>{{ $t('home.main.header') }}</header>
      {{ $t('home.main.desc') }}
      <div>
        <router-link to="/info">{{ $t('home.main.button') }}</router-link>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 20px;
  margin-bottom: 2vh;
  font-size: 19px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
}

.text header {
  font-weight: 400;
  font-size: 130%;
  padding-bottom: 10px;
}

.text > div {
  text-align: right;
}

.text {
  max-width: 800px;
  margin: 3vh calc(1vw + 10px);
  margin-top: 0;
}

b {
  font-weight: 800;
  text-transform: uppercase;
}

a {
  background: theme(main);
  display: inline-block;
  margin: 10px 0;
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: 500;
  color: #e3e3e3;
}
</style>
