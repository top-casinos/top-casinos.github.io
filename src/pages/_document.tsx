import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>Топ-рейтинг онлайн-казино — Надежные казино для игры на деньги с быстрым выводом и большими бонусами</title>
                <meta name="description"
                      content="Оцените рейтинг лучших онлайн-казино для игры на реальные деньги с быстрым выводом, лицензиями и щедрыми бонусами. Наш список включает проверенные казино для безопасной игры." />
                <meta name="keywords" content="онлайн-казино, казино на деньги, быстрый вывод денег, лицензированные казино, рейтинг казино, ТОП казино, бонусы казино, надежные казино" />

                <meta property="og:title" content="Топ-рейтинг онлайн-казино — Надежные казино для игры на деньги с быстрым выводом и большими бонусами" />
                <meta property="og:description" content="Ознакомьтесь с рейтингом лучших онлайн-казино, предлагающих безопасную игру на деньги, быстрые выплаты и выгодные бонусы. Выберите лучшее казино для комфортной игры." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://top-casinos.github.io/top/" />
                <meta property="og:site_name" content="Лучшие онлайн-казино 2024" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Топ-рейтинг онлайн-казино — Надежные казино для игры на деньги" />
                <meta name="twitter:description" content="В нашем рейтинге собраны лучшие лицензированные онлайн-казино с быстрым выводом денег и крупными бонусами. Подберите оптимальное казино для успешной игры." />
                <meta name="twitter:site" content="@yourhandle" />
                
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Топ-рейтинг онлайн-казино — Надежные казино для игры на деньги с быстрым выводом и большими бонусами",
                            "description": "Оцените рейтинг лучших онлайн-казино для безопасной игры на реальные деньги, с лицензиями, быстрыми выплатами и щедрыми бонусами. Выберите надежное казино для комфортной игры.",
                            "url": "https://top-casinos.github.io/top/",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Лучшие онлайн-казино 2024"
                            },
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://top-casinos.github.io/top/"
                            }
                        })
                    }}
                />
                
                <meta name="robots" content="index, follow" />
                <meta name="canonical" content="https://top-casinos.github.io/top/" />
                <link rel="icon" href="data:image/x-icon;base64,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" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}