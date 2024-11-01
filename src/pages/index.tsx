import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import RatingCasino from '../components/RatingCasino';

const HomePage = () => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        if (clicks < 2) {
            setClicks(clicks + 1);
        } else {
            window.location.href = '/goto/1win';
        }
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        // Проверяем, был ли пользователь уже на сайте
        const isVisited = localStorage.getItem('isVisited');
        if (!isVisited) {
            setIsModalVisible(true); // Показываем модальное окно при первом посещении
        }
    }, []);

    const handleModalClose = () => {
        setIsModalVisible(false);
        localStorage.setItem('isVisited', 'true'); // Сохраняем информацию, что пользователь уже видел окно
    };

    return (
        <>

            {isModalVisible && (
                <div className="modal-box active">
                    <div className="modal bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                        <div className="name text-xl mb-4">18+</div>
                        <div className="text mb-4">
                            Сайт содержит информацию для лиц совершеннолетнего возраста. Сведения, размещённые на сайте,
                            не являются рекламой, носят исключительно информационный характер, и предназначены только
                            для личного пользования.
                        </div>
                        <div
                            className="btn js-start-site bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded cursor-pointer"
                            onClick={handleModalClose}>
                            Мне исполнилось 18 лет
                        </div>
                    </div>
                </div>
            )}
            <div className="bg"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>

            <div className="container">
                <header>
                    <div className="brands">
                        <div className="logo"><span>Top</span>Casinos</div>
                    </div>
                </header>

                <main>
                    <h1>Топ онлайн казино</h1>
                    <RatingCasino/>
                    <div
                        className="rating-casino container mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
                        <div
                            className="page-content my-8 p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg text-lg text-gray-300">
                            <p>Может показаться, что найти идеальное онлайн-казино для игры — задача несложная. Однако
                                на практике
                                все иначе. Огромное количество заведений, которых насчитывается порядка 700, делают
                                выбор непростым.
                                Наш сайт создан, чтобы помочь игрокам сориентироваться и выбрать лучшие варианты,
                                предлагая один из
                                самых авторитетных ТОПов.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Ключевые критерии составления
                            ТОПа
                            казино</h2> <p>Для создания объективного рейтинга онлайн-казино необходимо тщательно оценить
                            множество
                            параметров. От лицензии и скорости выплат до репутации и разнообразия игр. Порой даже
                            платформа с
                            отличными бонусами может оказаться неидеальной по скорости вывода средств. Только
                            комплексная оценка
                            каждого аспекта позволяет дать объективное представление о надежности клуба.</p> <p>Наши
                            эксперты при
                            формировании ТОПа руководствуются следующими параметрами:</p>
                            <ul className="list-disc ml-6">
                                <li>Надежность.</li>
                                <li>Отзывы игроков.</li>
                                <li>Бонусы для новичков.</li>
                                <li>Ассортимент игр.</li>
                                <li>Удобство пополнения счета.</li>
                            </ul>
                            <p>Это лишь основные параметры, по которым мы формируем рейтинги. Мы учитываем все детали,
                                чтобы создать
                                ТОП, который поможет найти действительно качественные заведения.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Надежная лицензия</h2> <p>Как
                            понять,
                            что казино безопасно? Достаточно проверить наличие лицензии или обратиться к нашему
                            рейтингу, где мы уже
                            провели все проверки. Лицензия — это подтверждение того, что платформа отвечает строгим
                            требованиям
                            безопасности. Проверка проводится несколькими отделами регуляторов, оценивающими
                            безопасность, честность
                            и качество сервиса. Наиболее популярные и авторитетные лицензии выдаются регуляторами
                            Кюрасао,
                            Гибралтара и Мальты, которые тщательно проверяют деятельность казино.</p> <p>Вы можете
                            самостоятельно
                            убедиться в наличии лицензии, взглянув на информацию на сайте. Чаще всего она расположена
                            внизу
                            страницы. Нажав на значок, можно перейти на сайт регулятора и убедиться в подлинности
                            лицензии. Однако
                            проще довериться нашему рейтингу, где мы уже проверили все нюансы безопасности.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Бонусы и акции для
                            новичков</h2>
                            <p>Большие бонусы — не всегда лучший выбор, а слишком маленькие — малопривлекательны. В наш
                                ТОП включены
                                только казино с оптимальными бонусными программами, привлекательными как для новичков,
                                так и для
                                опытных игроков.</p> <p>Основные бонусы — это дополнительные проценты на депозит и
                            фриспины. Например,
                            за пополнение счета на 10 000 рублей можно получить до 20 000 рублей бонусом и 250
                            фриспинов. Некоторые
                            казино продлевают бонусы и на следующие депозиты, что делает игру еще интереснее.</p>
                            <p>Помимо бонусов,
                                проводятся регулярные акции: розыгрыши призов, турниры, Колесо Фортуны, лотереи и другие
                                мероприятия,
                                направленные на вовлечение игроков. Долгосрочные программы лояльности также
                                вознаграждают постоянных
                                пользователей различными приятными сюрпризами.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Вейджер и условия
                            отыгрыша</h2> <p>При
                            выборе бонусов важно обратить внимание на вейджер — условие отыгрыша. Чем он ниже, тем легче
                            выполнить
                            условия и вывести выигрыш. Наш рейтинг позволяет находить такие бонусы, которые реально
                            помогут
                            увеличить баланс игрока.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Доступность сайта и обход
                            блокировок</h2> <p>Из-за блокировок игроки могут столкнуться с ограничениями на доступ к
                            любимым казино.
                            Мы тщательно проверяем, насколько удобно использовать зеркала и быстро ли администрация
                            информирует
                            игроков о новом адресе.</p> <p>Вот некоторые способы обойти блокировки:</p>
                            <ul className="list-disc ml-6">
                                <li>Мониторинг в нашем рейтинге: мы сразу обновляем ссылки на рабочие зеркала.</li>
                                <li>Зеркала — альтернативные адреса для доступа.</li>
                                <li>Рассылки с актуальными адресами от администрации казино.</li>
                                <li>Использование VPN для обхода ограничений.</li>
                                <li>Мобильные приложения, автоматически обновляющие доступ к сайту.</li>
                            </ul>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white my-4">Отзывы игроков и реакции
                                представителей</h2> <p>Отзывы реальных игроков — важный аспект при выборе казино. Читая
                            комментарии,
                            стоит учитывать, что часть из них может быть заказной. Мы уже проанализировали тысячи
                            отзывов и дали
                            объективные оценки для каждого заведения из нашего списка.</p> <p>Обращаем внимание и на
                            реакции
                            представителей казино на запросы клиентов, так как это показатель заботы о
                            пользователях.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Удобство пополнения и скорость
                            выплат</h2> <p>Среди первых проверок — варианты пополнения и вывода средств. В топовых
                            казино есть
                            множество популярных способов оплаты: банковские карты (МИР, Visa, Mastercard), электронные
                            кошельки
                            (ЮMoney, Webmoney) и даже криптовалюта, обеспечивающая анонимность и независимость от
                            регуляторов.</p>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white my-4">Ассортимент игр и
                                слотов</h2>
                            <p>Разнообразие игр — основа качественного казино. Опыт нашей команды помогает выделить
                                казино с лучшими
                                слотами, настольными играми и live-казино, чтобы предложить игрокам максимальный
                                выбор.</p>
                            <ul className="list-disc ml-6">
                                <li>Слоты — основная категория с тысячами игр от популярных разработчиков.</li>
                                <li>Настольные игры, включая лотереи и мгновенные игры.</li>
                                <li>Live-казино с живыми дилерами для полного погружения.</li>
                                <li>Эксклюзивные игры, разработанные специально для отдельных платформ.</li>
                            </ul>
                            <p>Выбирая казино для игры на деньги, важно обращать внимание на разнообразие игр и их
                                регулярное
                                обновление.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Поддержка мобильных
                            устройств</h2> <p>Современные казино адаптированы для мобильных устройств. Сайты
                            автоматически
                            подстраиваются под устройства, обеспечивая комфортную игру на любом экране.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Мобильные приложения</h2>
                            <p>Наличие
                                мобильного приложения также добавляет баллы. Приложения упрощают доступ к казино и
                                ускоряют
                                взаимодействие благодаря предустановленным ресурсам.</p> <h2
                            className="text-xl sm:text-2xl font-semibold text-white my-4">Работа службы поддержки</h2>
                            <p>Даже
                                отличное казино может вызвать негативные впечатления из-за плохой техподдержки. Служба
                                поддержки должна
                                работать круглосуточно и отвечать быстро. Оптимальные каналы связи — живой чат,
                                электронная почта и
                                мессенджеры.</p> <p className="mt-4">Эти критерии гарантируют, что игра будет
                            безопасной, увлекательной
                            и с возможностью получать реальные выигрыши. В ТОП попадают только те заведения, которые
                            прошли
                            всестороннюю проверку и соответствуют всем стандартам качества.</p></div>
                    </div>
                </main>

                <footer>
                    <p>© 2024 top-casinos</p>
                    <p>Сайт носит исключительно информационный характер, не содержит ссылки онлайн-казино и не проводит
                        игр на
                        деньги.</p>
                    <p>Для лиц старше 18 лет.</p>
                </footer>
            </div>


            <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-3">
                {/* Кнопка "Back to top" */}
                <button
                    className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors duration-300"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    aria-label="Back to top"
                >
                    ↑
                </button>

                <div
                    className={`relative w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg cursor-pointer hover:bg-yellow-400 transition-colors duration-300 ${clicks === 3 ? 'scale-115' : ''}`}
                    onClick={handleClick}
                >
                    <img
                        src="data:image/webp;base64,UklGRrIDAABXRUJQVlA4TKYDAAAvL8ALELflOJIkR8neuwP8d48vFtxTNsoIN5EkOVL2njCPwXnHn57+b6eRJDlSjjiBj7+v7+t78PyiHUeS5CjMcTUQWuMiFmOAeqrfqSJu+4BJJfjG83jY1uGamiuwugSDEXUzOHBg/5OHbAuCCmCwAKFpUkABABwAZliIgEFIAgBVAVCgSmigmAEEagRqJAlYhBCqTvwgFaEhA0x4olaGJgiblCQGE/pPFvzfLIuyGCxA9e4a1YYG9p87DIobhOgghKQAEACACogRKiFGNOggGlKAqAAWVEAsWiPAHABAAmIhKhAVUAUkiTeEsIgGig5S8cepxIsMUgVCFPw1fVhI7QDiGnUtNG8RLradRvlYxv385/q7A47fLtM2Hefvdt1+09f+GSDttrbjcc54atu2bdvWGLVtpqe2bZt/8Enyvim/RvR/AvgPfd132+HTpVc6vvlF3g9OmDwx/NuvUGef6e55lbnXmwzXXjgWuLlmpmqUqW5v/pOsRi9Uy19lptYh1Q5ZJO2gevBtJt5sUu1G6naqB+vFN3ujal/S7ap6sV5chVWq3Ui/ver+/HhWlqp2J8xfNnbyh4BRqld/xlH/sGoHgNwnZ9WjPb4D9FMdHcOsc6p9APK2mvz2N4BB6vGPkQo2qPYD+LrV1M+Cn7vVMVFWVKuOBPh62TRXvQZoqT6PclW1P8CnO6rFrT8vOqWOCXKKtDLKly06AuDjbtXixsAztUNApZ7IikD+pV4A76+orpkK8ERdnGS1niDyR4Cf11TXzgdoVKTWDwrUymhJR6qubQYwb536kvCJej+eVyfUM5MBZqxWD78Klp5Ux8XTSz01CWDlerV6BUDThHr4czz71fYAP/eqJQ0AWhaptiHWd+qZ3GCZunomwJQi1YcAWXUjzVJvEg5VOwE0OaF69QeQNaTiVZS56oMk99QlQIsTqjc/A1lP9WC9CPXUXUkeqQfq0eqM6s5vQNYw1ZsRso9o0cdgnGqiynBXLpA1WPXwygg8VEcFPw6Z+lYuwHDVc/WJOllNNAaYV5zi9nuAgarnZhF9l7puHsCs28HJx58BeqtumEOMtVarq6cTLu/cs20h4QDV6hXEuuCUurphkGZP1ZIGxLzslLp6elr9VFc3JPYJp9TVM9Loobp6BhlceFo9MiNZVk/V9cvJ6NLT6poun4G511VXzyDD48+qntl244Lh6ulkfOJR061owC9Y/3qqxNOv/JrTBt7dUHR+R9fa/IcC"
                        width="36"
                        height="36"
                        loading="lazy"
                        decoding="async"
                        alt="бонус"
                        className={`w-10 h-10 transition-transform duration-500 ${clicks > 0 ? 'rotate-animation' : ''}`}
                    />
                    <div
                        className="absolute inset-0 w-full h-full rounded-full border-4 border-yellow-600 opacity-0 animate-ping transition-opacity duration-300"
                        style={{opacity: clicks > 0 ? 1 : 0}}></div>
                    <div
                        className="absolute inset-0 w-full h-full rounded-full border-4 border-yellow-500 transition-transform duration-300"
                        style={{transform: `scale(${clicks / 3})`}}></div>
                </div>
            </div>


        </>
    );
};

export default HomePage;