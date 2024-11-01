import React from 'react';

const CasinoPage: React.FC = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="brands">
            <div className="logo">Rating<span>Casino</span></div>
          </div>
        </div>
      </header>

      <main>
        <article>
          <div className="container">
            <h1>Рейтинг онлайн казино 2024</h1>
            <div className="rating-casino">
              <div className="item">
                <div className="info">
                  <div className="brands">
                    <img src="/upload/images/casino/komenta.png" alt="Комета казино" loading="lazy" />
                    <div className="name">
                      <span>Комета казино</span>
                      <div className="ratings">
                        <i className="active"></i>
                        <i className="active"></i>
                        <i className="active"></i>
                        <i className="active"></i>
                        <i className="active"></i>
                      </div>
                    </div>
                    <div className="bonus">
                      <span>255% бонус на первый депозит</span>
                      <span>500 фриспинов</span>
                    </div>
                  </div>
                  <div className="params">
                    <span>Фриспины</span>
                    <span>Новинка</span>
                  </div>
                </div>
                <div className="btn-box">
                  <a href="/play/komenta/" rel="nofollow" target="_blank" className="btn btn-transparent js-play" data-title="Комета казино">
                    <span>Вход</span>
                  </a>
                  <a href="/play/komenta/" rel="nofollow" target="_blank" className="btn btn-white js-play" data-title="Комета казино">
                    Играть
                  </a>
                </div>
              </div>
            <div className="page-content">
              <p>
                Играть в онлайн казино будет выгодно только в том случае, если вы пользуетесь услугами проверенных и
                надежных сайтов. Такие бренды имеют лицензионный софт, проводят быстрые выплаты, дают игрокам действительно
                выгодные бонусы. Однако в отрасли работает и много сомнительных компаний. Рассчитывать на получение
                каких-либо дивидендов при взаимодействии с этими площадками точно не стоит. Сайты затягивают с выдачей
                выигрышей, часто закрывают счета клиентов по различным надуманным причинам.
              </p>

            </div>


            </div>
          </div>
        </article>
      </main>

      <footer>
        <div className="container">
          <div className="copy">
            <span>
              © 2024 ratings-casino-gdv2.buzz <br />
              Сайт носит исключительно информационный характер, не содержит ссылки онлайн-казино и не проводит игр на деньги.<br />
              Для лиц старше 18 лет.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CasinoPage;