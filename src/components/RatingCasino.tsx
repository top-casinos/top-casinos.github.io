import React from 'react';

const RatingCasino = () => {
  return (
      <div className="rating-casino container mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">


                <img
                    src="data:image/webp;base64,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b2RpZnlEYXRlPSIyMDI0LTEwLTI2VDE4OjQzOjM3KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTEwLTI2VDE4OjQzOjM3KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkN2RjOWY1OC1hY2Q2LTFlNDYtYWJhMS0xZWQ1MWNjYTg5MjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZDdkYzlmNTgtYWNkNi0xZTQ2LWFiYTEtMWVkNTFjY2E4OTI5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDdkYzlmNTgtYWNkNi0xZTQ2LWFiYTEtMWVkNTFjY2E4OTI5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkN2RjOWY1OC1hY2Q2LTFlNDYtYWJhMS0xZWQ1MWNjYTg5MjkiIHN0RXZ0OndoZW49IjIwMjQtMTAtMjVUMTk6MDI6NTIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4A"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="1Win"
                    className="w-[100px] h-[100px] object-contain"
                />

                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">1Win</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">200% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">70 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Быстрый вывод</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Наш Выбор</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/1win/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/1win/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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LmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMTAtMjVUMTk6MDI6NTIrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTEwLTI2VDE4OjQ1OjM1KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTEwLTI2VDE4OjQ1OjM1KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjMjU4M2I5Zi0zMDk0LTVkNDQtOGE3YS0yODdmZjM5MGI4ZTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YzI1ODNiOWYtMzA5NC01ZDQ0LThhN2EtMjg3ZmYzOTBiOGU3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzI1ODNiOWYtMzA5NC01ZDQ0LThhN2EtMjg3ZmYzOTBiOGU3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMjU4M2I5Zi0zMDk0LTVkNDQtOGE3YS0yODdmZjM5MGI4ZTciIHN0RXZ0OndoZW49IjIwMjQtMTAtMjVUMTk6MDI6NTIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4A"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="MONRO"
                    className="w-[100px] h-[100px] object-contain"
                />

                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">MONRO</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">150% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">400 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Новинка 2024</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Быстрый вывод</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/monro/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/monro/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTEwLTI1VDE5OjAyOjUyKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0xMC0yNlQxODo0NDoxNCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0xMC0yNlQxODo0NDoxNCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjgyMzZkMWQtNWVkNS04ZjQ1LWI5YTItNTdmNmYzNGFiOGQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY4MjM2ZDFkLTVlZDUtOGY0NS1iOWEyLTU3ZjZmMzRhYjhkNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY4MjM2ZDFkLTVlZDUtOGY0NS1iOWEyLTU3ZjZmMzRhYjhkNCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjgyMzZkMWQtNWVkNS04ZjQ1LWI5YTItNTdmNmYzNGFiOGQ0IiBzdEV2dDp3aGVuPSIyMDI0LTEwLTI1VDE5OjAyOjUyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AA=="
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Эльдорадо"
                    className="w-[100px] h-[100px] object-contain"
                />

                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Эльдорадо</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">90% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">30 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Классические игры</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Рекомендуем</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/eldorado/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/eldorado/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="ROX"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">ROX</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">120% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">300 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Надежная репутация</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Лотереи</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/rox/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/rox/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRmYCAABXRUJQVlA4WAoAAAAQAAAAWQAAMQAAQUxQSAICAAABkINt27E3T1Lbtm3btrlaozXZtm23Mad29NTRiq2reN9+7/OuWSJiAqSY+5xHN+9da2TZ8uT6DedPV5gmP715w/nDkxVNta48uP580Q6ADpYXaIaZNqBZVN1UPQM4uxbIaG0JU9luWq3yobyp/Ctg2z/ptngnOaZrZU1rnBQVGr4NEHPFt8D2AAOmjws8tsdew2Wxtp4xflzg/guy/vncXzSctn/9z1XRvQLwq5d4NiQbIEJUS8cD/Owmno1JAXhSQaX8M4CkIeLZyDSA5+VEs3QEQNZg8WxsFsDjkqJZMgYgY4B4NiYLIKq0aFYMB0gaIp5NTgOIqC6a5WIBsgeKZ2NzAeLKi2aZWID8keLZhByAsAqiWTkWIG2EeDbiF8CzKqJZIQEgbZh4NiIb4Hkp0QwNB8gdKJ6NygB4Vk40qzwESBoqno1KB3hYQTTLPAVIHSCedfoBEFZGNMs9A8gYKJ51TQKILSuqNwGS+4lnvT8ChNUQzZDzACmDxbNOSQDhJUT1IkBGX/GsSxLADVEtcQXgY0fxrMNH/r1/4HrQ+xv/I+QihoNXrge8e66eSu9vOH9pq3AT960DbFsP5NoScR9hW4r75Oa2cu+BXVuBnHaWOIVo2zqF1Na2ut+Ao10WzJg7o6pl+IJprucPs7VdOGOa4znTq9qqzJ43dWEvKeYOVlA4ID4AAAAwBACdASpaADIAPikQhkIhoQwCAAwBQlpAACSRO1SsNPsaZ1azanSmaFAA/ng///8aaAid6B///xwUAAAAAA=="
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="IZZI"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">IZZI</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">30000₽ рублей бонус на депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">75 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Наш выбор</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Быстрый вывод</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/izzi/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/izzi/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Joycasino"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Joycasino</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">10 000₽ бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">30 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Популярные игры</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Турниры</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/joycasino/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/joycasino/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRh4EAABXRUJQVlA4WAoAAAAQAAAAWQAAMQAAQUxQSBYDAAABoERt27GtuurPtm3btm3btmvbtu2dbbs+I9u2dQ/e57qfZ94kIiYALyEX6vGt72AsFj0ZLWhXoPenq/fH4vHozj/GFHWQocMHq/3xeDy04o0qDor2/z72ROivsMw0ZtdzUW9vYdFg/h3RhtqpUvT8MfhE1FV0mT+4IfaLcyjq7xTrv5MrJontIqiH3xKnx7ObMv4mLtcmIelPWlXV5NghrmOJPDUuidtfyFCx/RfK6mfE+VQAGCTO65i2WrVSNHokrq82BYCR4n5JUU8X8T57xtaCNxLlvf+G1i5RosG4nYZIXgAYIMqNY+qUrTXGp7g3E0DSoyLnF/UdJrwJK3GZPXgzG2jT4yK/wlvlOdteDebPmawAkH/x6/VSA1+yjeB7hQYLQ5vT9xa86aJCP4FyGdsEXld4L/aO0P8S4PRtobOg7ci2KOazfaDF75PtcFvhKfka6gpPySZW+gnryX4S8/kihpqvTlTOGwDMF3MoQVeerWDfCQ0mIRWekqHwJo2Iej6K3CeDoG8o5qdvkjJP2VjQeWI+m97QR9R3C2CCmENJLCaTUCPyudBjKdlq8hGMu3Q/AevJLFjuJHOSmvLeYCNA890htQ2tRV8X+e+TZhZ9xPywIMwfCT2fhbUW8608htW6v4CmQqvo0hwn82EudJvNAx9BrmQ39J46ckSX5aQaMIjV0n0ltB6ZK/RsZsUrREoZvAk+01oAE1g/1WtCP4I5w2k2B8o57HPFa2JuC6Avi6RjSb4RejA1mSP0QXHNACZ9SMbTpg0AUIvJ0pSm5kGhd2vAnOk8+xTa6gr5r062tJmKddsi5tae9GeYXP2kV5ueb4RF2Ql0uNAbuVXYrhC5e/rKc6H7E3vwrsK+N2jyCPse+nEqfX8YSzxw9aQ9+FihL6pZJNriKAA6z9HxcuBJwuxt2GY/4uR5HYaPnHyUDMruQlfAPvtyB7660E61W1QF2u6nyBdw2i2oO/VjfViWnv9Qc/rzMtB/f/tgNBr3f1sRritOm78rHIv41n87pnISOMzR9+s1e3171v84oXoSvIwMVlA4IOIAAABQCACdASpaADIAPikSh0IhoQusXnYMAUJQFwAfQB/AE7F4BSyav/527gAPJa9jL9d/RpB4Rdt/zI3WEdOD9WnkbHitHQhnLyUEtIAA4Uf0Pp1b4Lzt8RLOEHAgPxL/iA+Vf/hffXpvZTvIvHMT+87f2tDDbz7nbz5iDD9Ukm+X+/VJIPjFKwg64nt/1tf//uUjGSG3ha8DJ/pyrTQKadVn5L8+Mp0zzP5eqL8AnxaCnCASz//qDdLb6m587Mp/y/tX9OdnJRY0lhyAP/7HkAly/zzS/CE4f+l6//4TgARFtCAA"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="1Go"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">1Go</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">150% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">400 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Кешбек</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Постоянные акции</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/1go/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/1go/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="PINCO"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">PINCO</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">150% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">250 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Моб. приложения</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Кешбек</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/pinco/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/pinco/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="LEX"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">LEX</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">225% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">500 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">VIP-Club</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Лотереи</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/lex/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/lex/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Drip"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Drip</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">225% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">300 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Турниры</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Мгновенный вывод</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/drip/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/drip/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRhAFAABXRUJQVlA4WAoAAAAQAAAAWQAAMQAAQUxQSCADAAABoEVb2/FIOm8hKaY4tm3btm3btm3btm3bVsqVrra7C+fi///x5cxaETEB/N/gQoded9lO0/wbzX3reNVfTvgXqK+vTmuory+DVfvUr75WX27ImGWF5WdJVBZqUwvVUJGvrMxVppU31CYb6iBXX5tayMGu7R2/LZZ4tLPjtRzz96uutpHqWymbvT1Gx3yyA7zY1V4sFtvbu3djvu9/+fnXX3/69MwccF1nsb29vb37GJq+7morFtva23tXg5vVc4Fz1ZfhFdUJ5AdUjwV2M30PFjZ7HXYy8xqobDd9TzY0e254W/0kWEP1VJZx7A+/fnk4nPjlL99P6cjROELv32bfF5+HBS4+70kdfeFFp9Vxrr5zwJn9+kMwz1QHzjvokCPPmIllLz/7Te059/LDoXmkaisdic05y5/mJ3PRXldgCfWa2cg8RF8g+bReW9h4QC+HzXX8ytPNNiepV+mdJFcwue/lqlMX4D79bMG0pb7SXSn8qtp9Q13Kk3p5IveT6beVw0mmr5GIb/TwlH11cr8TtG/IYj7h+LWJYJN+dTeY+UWTr+QJqn7WvSGYvz/jsTp4JG1SCxHMMVHXgAiu1rsfV587e8jn4GzV3QAOUV2JXC31G7+qzkqwoLoyEeysPy00w/3qfpR/o6fMON+CM5BYT8fNQETwtu6+i06Y+W49D1ZQx+bYZkua+rU9zwljr9pynUf0lyqCbXVEKwEX6c977/+Juj2zT9Xr9t7/wMNnJOBI/TgS0/brGq26AwO6M/C6PjjjrXrdDM/qicxi5o4AV+tXJD42860C25g5a+IJfZTEsqVS56x8/CSL95W6FiBYaNAvelQ7v/P9Mma988cBnfj+5hBwf6l0caLweW93T2lY28fHVcCRw7q7e0u9I56CoPLNUukQIiKqp5mmAaqgdprWRiKCNUeb+UYTARULLL/CnEBERPM001RGELnW1qamppY6IKIwTVNy2ioiorxlmtbySJIMCJIREcx/z9RE52nlRESQGqkAERFkR0SQHUmAlCRBEEQ6sNSRl1+018wQEUEQxJ9IEEniTyWI4D/8AVZQOCDKAQAAUAwAnQEqWgAyAD4pEohDIaEhEVwEMBgChLGAawjATUDaAP6B6AHMAfoBwgH6gdYB6AHlTexZ+oH7GfAB+lpS6/EpqAfp71Zv2A9gD9VVPLT5If/7QqWHPA+sgyU6WIPfFtcsgky7Ra+B9IAA/v89WFd/90l0Bf5oJ9U+n4m/4cyZjblyzRTqK3lhtuv/EY8sDISjde922ebHRnujGzLtztNh//ECUGd0orHbacBKSYe/UPqsGu5DgO7eX7ef0e0J8bNkPVyg7Pn0O57mUIhP/t7xKwyLV3y2qOIcPh/vw3RJalviMzwDRz/7/k6Mu/OfVTwg/NazV9vpkVc3lpkFUosjYoUIjwbu9OSKH5pBzoUhTTT5ox3LH//fFg7ch4lSz/7D//dM5o5WVSSSf/66nrb2s0yWb/3nFxtGyUtZLP//0Nuu8It6waI5c4f//85j0AVQPDCR/Hf//p0F+fQfyhxdaZR/+lrJ8lLF4orf3v/+OsVPTyEOUKLP/p4LckX///2Ibl9EgfcHumGNYY1rYEQnBFDOye3+LNhKkXy5skSdT0F1JYwhn1pNvHNvwglsX6ib+H3k3BqrZzrBHD+978Mb3f1gAAAAAAA="
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Mostbet"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Mostbet</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">25000₽ на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">250 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">БК и казино</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Удобный сайт</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/mostbet/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/mostbet/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Friends"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Friends</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">30% на каждый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">10% кешбек</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Подарки до 1 000 000₽</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Лотереи</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/friends/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/friends/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRgwEAABXRUJQVlA4WAoAAAAQAAAAWQAAMQAAQUxQSDACAAABkERbmyFJf3ePbdu2bdu2PbOyzZW1sm3btmcyIsdmu79CRPxRte5FRDhy28iRKGBucUPVHygedIOefpRSOkJIIeX7d5uy+2wMj1xMtX58FlKKt0I40hGOkOJPK6JT4f7n8CeEIz886qzIvvHDO6EnPzwb7DMWbHfDiC4AG6kVLOpOIc9snoUo7C7YxlEvF3wDiY4C66iZWXiUXw+iB7yrRDQIPLfXzChgee027dSa9PkBLNFk6tRRe5z2bUr3++dXU3G4gfacretsBz5kJJoLfOnWrJ1W3dVA1MxpEUAbMrXblSM05vI8BvCjCSlmk6HRgExHNBO4T6Y6AxHTpvr0Ii4bQ6IA3M9PqoUm4wEnjeJlIpMBPlP9etpZb7QUAHYmIM0Sk6mAm95Cf1aKqtWrVq1WtXYu9pDqIKB89LpvV2/cun3r5s2bNy5+BO6GBUHFWCjN5hR9BiCiKxmwvU4VRLMYLcMBuBUpAJgUHHFxAGaajQeASxnI7Or46dNnzprha8rkN8DhIEheplyRCpKReDsArCRizCVTu4CDtvgLPTHLdlUdEKwlRnuB/bYX4v+hj40qfwLwtCTxZhvtBA4oHvD/UG6qNO35DZinKR0NIGpEidbt27Vr17Zt23btuuTgpkrbVk3uAkeUqfKpS3NuqgQ0CVvBLxzGutqdtsx2EgY0vVvAoh5W0/t7IdvpTTSQ2zgbzBvHEa6+cYTdxhHux7Pl1I3zzrhxPj4fRPGfI1ZQOCC2AQAA8A0AnQEqWgAyAD4pEIdCIaEMAioMAUJYgB5P/HvxV/IDpo+TO+GS58/f5z7bulBvHfMB+mH+x/uXvOegD/wemB1AHPmez1+0363e0ADuOlGIRKK1AwB/5oazs6ya9qJLl98uTVDTC6OJ72QumBMtdEFHFcxL1mAAAP7/PVpr9x38FQh+v1MJHa7/X+UmWYfvZ4wj//3kB841pnMqncL2///qx4JLB/Q/adeU7mA9X3JwH11Mbu7lRlIKwXD+68TMZCa0XVzBKwClzR9p2ybwP93DDKdD7MhFAKqS8niienqw49Qv215hDy/qr4/n4Ifn60yY5xOncIDVPx99Bu/9VclE/X5rbYCSKeZEIFl3BaY18AYsOCrNRK0wBo7owdv3vY8eb8/+f/wWKxAx/YK+b8/+f/wb/+Z7qxuIxBRz0vbtcCkYmP/1uXAZfSmVXERzzKkl01f/4aDOyFLS+Rbxd95Hkk8ez2NSTI5PjlV1f6Uz5blJ4jEnMQ4zbPgiE/zmo+A3qYwDJZN7Gwqh/6hvw6wrDl1E0qAZ3d11j/pyj/QgauElFxrEBoSj/TpaCJl4u/FYAAAA"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Gizbo"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Gizbo</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">$400 бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">Бонусы на ставки</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">БК и казино 2 в 1</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Подарки</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/gizbo/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/gizbo/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Riobet"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Riobet</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">225% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">70 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">70 FS без депозита</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Акции</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/riobet/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/riobet/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Royal Russia"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Royal Russia</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">120% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">10 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Колесо Фортуны</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Промокоды</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/royal-russia/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/royal-russia/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRi4RAABXRUJQVlA4WAoAAAAQAAAAWQAAMQAAQUxQSEQEAAANoLVt29lK39L9vHmb1B3btm3b9mx9tm1rz7Zt+xtrrTW27Zm6TZ6Nps2bdCJiAuCmMKQe9MsadZvVb1BLE3rahJSmlTH3Hjx2/EhKZBKJLKMchW7ohpR1W7Xmg1t37Unl4qSxyAs9WrNDx8aB9JbN532cTabYc5qu+wyq27K5tWv5hrO16japEw1FfMhm04kTe08f15oPHFTn6JqLVjoXz1rsJRJ60GfU61Rj898Vidb9WkRhT9ADRqx6MLdv64bzrScOym7enRLxTM70jpT+oFl3YHD11+m2vZpCZbRenZrpFctFr9m1KrZlcDHH7A3S9JCPB3Tc8jGPHAT1vmjbBlv/qJpyVXLZSS2ZyHlCyFCAao48+e2xuaPgsmzT5cRHO26btGajmc6kTPdI+g3Zrdem90bMgXO2WBYw2QBo173i5fYP+v46n0lmTLdIjwTECO3ri7eFoZAItoRSe7X4ftk1Y/84Rol0zh3SqwnfzOPvjZsOtUQ2DmsM2PviiFuXbZfJTN4NoUc5MmPTCw82hWoGOQO6tn2t+itrVuvxlKVOiLCv2pRNP98LlRYR2PRBba0xn+5868AqGU9YqsgX06ITKn5/DEoJAAmoDo39tuL5w2uMRJIV6YahT9n601NQB1IGOeHbrU9t3GNlsqxE6NHU2APvPIcyHfdx/Okfz/E5U4WQQWtE6o2HUK76yNea3fjHhXTCVFGDmzf5dGnQLSYbBjlCrP8rCzr9JeMZZxQIGUP+rTsWroEKTGjO0Ljhh3fQzkwq78gI5UbsWH8VnOc1KmIJAAK2GpR23b3luuXIxk0HMoD69b5YAIUEe7YkSiU1GPpJh66rRTbjwB9MD6qQfVVoRYjgwVidb2/fdFRkzJI0PddNfDoPrnoC7ZdVn/CfZWZKIT8F+m6s09gdb4Zbf3jd+SPpbClshOqnv5yPS2D7TdbYinwqV4JhiLYV4aZFmMpIb/b93JMX8skS/DJS7edRKEoo504rarTeLbJmMSma7jnbp5hyE5oXQuGtA/dQzsZgAyybLGuCS2TLNb2zJzXKghr48zJmpsO7u7qneaTVRb35KSNp5ZIN4jU5FWicPBZzz6sUPjD1qJXlvFl/ZO1cOhtHBOXMBEsUQcuj9bujLvj/ywxAAGjkgAELAuQRphxJFPdXR8caCATrj4RagqcJBJUdmdQAEB4CNCUpU3PEIJvyZ7jO5IxBAJhsmAAmNSrJCcE5oZBgSwAIHrQEHDPBMRMAMMHDTGBLc0ZwTigkeJkAklDIBICpFAAMglMmV9SaGggACzgk2DMByEkCCK5yHpBUwAQwFQjYElQTAGgM9yXAKCQAhEKyc8hUgq2A+4RiJTJACggOGQC5VUhOCB5kwSAmDxRnsnE5DwmAQAABgCnIEwQvanCqwbmmxJvkSKGMh8ul+M4jQ1XFv+xMhlU2hIs7jkREx+qa5UxYqwFWUDggxAwAAPA1AJ0BKloAMgA+JQ6GQiGGV7czBgCRLYAQQoPzy78SP2c/3vygVF+Z/en9wv9TyUZj+uD9T+YH9y97n9A9gH5L/vHuAfo9/gv6X+4n9D+FX1Lfsz6gP5N/Sv87/bvdl/rX+x9h/5Ae4B/Mf7J1hv9j/2vsAfy7/IerH/pP21+CL9nP/H/rfgN/l/9O/3354dwBm+f2zwX8FniX16/q/r8Yy+k/+d9Df5L9jPu39X/aP1R/wHhH8Gf2/1AvxX+Sf3L8oPzH5IAAf5H/Nf7n+XXnU6ineD2AP5P/Nf9F+Wnvp/hPDD+s/5b/AfcB9gn8m/qX+x/xX5PfSx/Df8L/F/lp7X/lf/W/4b/Df+H/M/YL/I/5z/jv7N/jP+X/gv/3/6/HB+3fsb/rUzKw7DQfkt6lyKnWvUh7uv+iX7ldVONXzeygjgzaBa5P/3fnVPfnOsr6NUCbnblJUPpnKligIJtwpsUeoIVOrSckn2DMeNPBCMgEj640SxECoBVmpRLNAb0oLuuV+LB9Hg8N6ASN2o5lz1xKNcRCytBecYFjaErP28EkEo7OGKfeOgAjRAte4Yc+G89ew5cQAP7ioufb69VlVujDFURmz9Am+n5aTVI92FJERXcTO3///8ruLc2RcO+3qPixp/1f5X1QSgkQ8ja7JIaTloNm+1tf7UhQpO3eUX+IZX57DuGDy+gf2JBmNzjuGUhxT8NiLM38s4JZxpPF3vF2gbqd27nF5voCdGUitb3600ThG4udgTpE0WD1e1pHv87Ez7EkaLh1UPtfOgN/V7dzgcbv2DZyGRQd7jNu9FtRR8Jtg3V6JnjWGD7if41LXLE2ENio2vH5udDRdoyMvKWKO8ekl6VCpTVyJ70IalV1UCeNM8jbFuqnuiFwEcD+Z2CRx31x1jibM90aOLiNi+5CIsxIxb7XYabDMEj2lsvJXONq61ZPZJjKuWs82lAxm0zozlXR9vmbuhBOmhkKyt1v7El4obC6u2aWKW69u0Fq/PJztHO+oauNNu9aLhb2HyAhBbZwfRrr+rItW5UzAVcXAFDQes01vM67vkGDgjOub+wZRrdi0TxjFv4cjog+xOtqeYR1VIXyb/ZNDSXl4QF3CdwR+EbtftpBMVoXz/+GreR8OTewYeD5js1Pu0JA5Fb2agMqYB3dVopuyhksa1RpsDz2l/4G8QH7DMmsSMtVyHFMngKbO9zvv3MaKweK3L6CGcYzyLBfZ5cYPsoDDj/GL85mM4cHk5WSGd1d4KmXcr6v7v34/c15bpWnQ6qkvui+qSF8LJhUgiSIXPIuHDuZFypTWLTkNxMA+IV9AmMMaXC1OaOXvunKDENso+yoW2SJ6aGpyXFuTAetkaUTjpTDxwmVjP/zYI7otiqgzl5SO4f1rGWuqHJPCmzR0Xkc2wp57emEaL2zMvYOWR1Ei353b4IwuB5nWQ/As5sEUkzyU8rCoKLdsfoKHi+on3P8oGlr9BU7NBFwvGkBj4FN5f5VT22gOSM+xD575Bzp4Mv6hJJv9+WBO9kPi/BWD+RiP4Z2u2o2/xAiNRA+wAxDn98/FH+9Eg8uuVKgP/q0txh69sNChYkwDdq/Udy/gzmC89Dz1bh9mMfkrknAD3QLmV4/WEw1iZnhOzBgoiMYMrTD4w6eFoTx+101B8NvM+R6QZDPeR/fb0ZX+HnnzvOuYvBwtLEIXYMEMJFIr8D50X0G5quQxH/9cH/pyQRGcZF7QmgcEF5GYaE5qJExgYA9JL5xvU1r1dy4O1xJWdp+5NFobEkej4oQxLzXXJQastgoJTaJ1oWE8/ABILGOAT+u4i9siOVk38Dib33JxgR2ZmDpAt6ANTkmmK+hU/WoqNELNn1mE2GicsBYBgw9REBRrcQ9X1pNlscUAOOR8eyL6ua1L249lDUTCltX2rR614FCaHNZbhrPgTbfOvElrYsazBJzQ8woc6QQJZQ5DoWapY/JH03u98aXkasczfSM0qrcAQvFwPow+Y/jPtO6YchIUBPxw9LAaTjWyJOANN8arqopRix/kJLoA710jZq8Ru8YRCEW2Csvwa+elSg9wcT5aSgi9JMJaX8uMtqxyZftPQ+AREbwQq/5eqPEFy7KmnAF5ckrPIft7t2WaFfwptGddgUuJfW5nM3Keh1KFEF9h9GEzcSbn+vv2eSKS9lrSBYz+86hIG3gNYCOm7i9XvN5+vKXZvQGTa24Tv514tng64jfkLY0YZyV30+HRQ+7PNZqteWI8S7ljjNs/tn7g8r0Xg+6+XG92L3cDog0NXPkGLvH6r6mOYzdd6lXdtY0b5EZcgcMtrsFOW2SL9FeMJZns+ZGfOPHJkBR+FhCQPPuSEa+H6dULrFehF1yN0kRUJnKUbIr8F2zJVtFXF9LwKPddpuv+UU6NdyZ8F1MJBwg50jOB5xgyTE1pFCqIfLrGVIlnxWdJ+1Qof/AIL1h2BagmK93u5m7iTymNSvoe+UlQKnvfz0QZ1xbEDAfcRT4/6lg7jG+zFgFIugD31h3pNmyipWpTGheK/bUYqJaqq6Yv7c66bhEyg5qsBkDPwBYO41//m9AJd0j8u3Z+SgQxa5RRbqp/r1oBbNixd30gAOKseCc66eMeJt0mQ2Up0m9YKmWqRGB8v+kjQSHK1rJ50yEgqPsRg7mOY/xrVPpw0R/4fUCRJEmEBsdmDV9Qy7kF4LnxBGMh9dKExvjCkpFPWVHaNPTJFp8Hs0zrQ2c/+ImurKHLRJ2du42nfuhJ8h19/UNfGU99rwPsWf77qd/U2wBwe13xaySI6Do6QQlHvwV2m5f46VWVPuTnctxed2W6u+vp8HV2ZY7J+Bm0rLf3Ml/F4+CG8MamoAFA6csKVAFstjGlncDM/HcVtdf4I0+oSUOf8CNerY/L4796nx+Ci4p6A3ZhIfhzRYQqE6vBURqpyss8ZjQd+Hqq5iO1q9+A9V1E/HoPWKYo7NeYUF5+nZfIbCYjtGyArhWkgwpvLma3Dd0cr9vjQECvlpZwHyYdfKNVj1QAf34LIXA9NEshtkwimKXUavgxeoaPofWw9Iio2fQZs4j8BHBsdgEnhXN6dSiaQnswxReybUlXhHgXQniBHB83qtKr7aSL5C+VRm1YEQhtkNCekL3FrkbBL6FCIUC+34V9jCRqDgzsJrJQI/ec2Yo8AWy/i6B9mrSRAb82yKrewnTb6NL86KYJFGwIt+8LlvzwsnTDAexW91UqfFf2JM06pHO8xSG0OAitXK0nk+1Y/B0abJMUVoNkmYjc89drfRcmi3Zzg/H/om+ZlYHkheKyiBs23ZCDkf/0aBn31bx7CRtj+09I8fBfe750NIknE2C5GHEdMBQaLEXK+V0K9F5RvNWrjwlUD6mI5cwFDlebapSVeUI+77rQ260/PmH7X3eBR1E64sfmhlMY/TH4LYBBPGA3UifDQ/S/xCEQUpojvJDJnNBpEbGVIkGZu7VpcTj+ERxNGtc31S7GuRQ8S/pftIWczdX0ZckjDYxCjcoJyAQQMrpXjyi/PXNQV+hlnK5tX70z7nk0E83piXHvb4iqBvm8o5th+pdL6VBXBjM2VX43Gec4aSjO8INdy8GbuFmvs26S/++3KD8hL+U9bCXeHsLxX2VT2FQsDUcSfeF4I0xZjSargVSm241w5uzPxClw7r2WJrNRtTi3P29a6rZP0jw4jB82u045Mg/0pVk7rEiYL2FoZL3zcwOn/cNbqPItwDp80ywpdPdScHNjL2Nmb4itwDDS1uSGXFAbqxhYhm2C1XkjA0rWFDtR49OelFwvpMIDX7a/ExK74fvz9NO8AAriAudOC7O3WnmblDQhYJdWajSeGZwdJt311wfYwAct+Jc9WNSNH6efg/c08jcMCcch1W8YcBwbBkSYKTpjwkh022zJSZ3OgbO8hwNbVW0ygdiQG3Nv2fE7NNSrX0q7N+Tr/ha/ESzRrPZDzKGVn7JqE913DICoz89DlM5XV8uRmeXX5gTxBOao6wzxtSOcUgSZmJd4EkCSrTOCzm7BLtFRL05Qz/9Hm3Nw9GYQGUlzraqE/dCiR1NCL/im0QXpTEMr/Nn8M9DmvkQ+zjOmWAtmncM52gZGaW2sjDrz5Qg6pxKCkqgB7xxq8dszKlU10u8z09qIneaaZflbkaOkTANkGAJ+x/RfXo4M/zIr2u7nYlPrZmL7Q1U9R4hRtCgIrVO0ArontoUGaaKc/d5Jz5tC02Nw0DKi0AMusQxZjBIGqiaVrDxMkMfnTR4T3/pA4lkUAhy1S+TEW3ibSO/XmrkXAbaPxNCuMNdNnYEZtjZUAFHyYf7mGaRkQXY1m5Ev1arsXp9vxJa20XqeC58Su+eFEzZBZQLdNm77x6EAAA="
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Вулкан 24"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Вулкан 24</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">90% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">10 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Постоянные акции</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Турниры</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/vulkan24/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/vulkan24/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Вулкан"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Вулкан</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">200% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">30 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Тот самый Вулкан</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Культовые игры</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/vulkan/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/vulkan/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Starda"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Starda</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">100% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">До 500 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">ТОП дизайн</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Тысячи игр</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/starda/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/starda/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Legzo"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Legzo</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">До $400 бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">До 500 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Турниры</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Быстрый вывод</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/legzo/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/legzo/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRnAEAABXRUJQVlA4WAoAAAAQAAAAWQAAMQAAQUxQSIwCAAABoHbbtmk7Wjcp27Zt27Zt27Zt27ZdMR4uYtu2k/7h7HPuH6hqLSImIP5ndeFjv7ulyIqvv7hMxOHf3xMRZ3x+TpEdP7lzoYhTvrkk7+BPv/k89+uPLl00b7HnP94s55iOxu9Y4FYuimht6l6xTle9Vi/whUlHxooVAzZKLfG3wkNvy7uUd3I6YsDSOfujfzyH4Ytcjj/zHsTv8TU6p45V79Op7eDK1KvwVmqJoXh2H9knd4VbUrvDDYfIPpg4E3Nnz03Ogr0yC3fPzNg8seyTcHLiMwzYrFfCwU/AtplFB6P95pMS9sicyrT9N9woucEJk3ku85pkORFRxdQ1I+J82Psl6eGbldFr8Yh4F7N2+FJ68HKpyctG/i98EBFHy30ytcUc/B2x7mS8cDg81Q8f7TAXL0WcBudcDs9NxUepKRsW+Jl3I5Yfi7/fhoMScR7cUOqM2u6j8XRsNhGXng8HxGi8v9185l0dx83EJfX9ynsRv2NwxM8YvkoiXsWszpi380eY//GLz47Agp1exeg2qG48CLNee/aFSbB9nMbUIj/wbtwFXZ9+9jdolVq0t/TlF8ICuT036y05f/e3Fe9ZOoxJSxZoxUNLTMkUvGPxTOyU+mOz2ZmiLx+Yuv009V6/MzNuOu287LknPz2XG95R7wuJuCkzY+1vMa6huVwulxu6wR73ZNotPxGjq92y1aHodYV6+90B5aZyuVxubpyNSir+wZXRxPQtopSNhb7FwTEQ67bEsPVLC2dLq9YYenJdux+AhyJKpVIp4mh0y1nj54YXI/Zt23Bi5K/0dcNLi8YerRsujbipoePekb91q4abS480tPo3t1X7nw+Phd5qeDMK3trQ5tac/+QHVlA4IL4BAABQCgCdASpaADIAPikQh0IhoQwCKgwBQliANV5jb7v7NfV2rLcHqA21fmA/hn9G/uHtdaYBz1n7K/BL+4Po1f+0HgdKMPcoySEuEyn/pM7c43KF1GIzH2y1dKJwAP7/PVgu//jcYpkZxT78YkdBu2zSxD6a5FpwIDUNf5miJIGmeHSFkOEj4FP/9MIb+dwwdpZJI3b/0MT8/k7q2c5uH/8FyjT//wANQJHAA2Qr4BFwlCrIFeK4YDxGua2hSlQJ/PtF8PkZ6RCOu3Qin2BQownQJnQhtPrKyzifAOS4ZHmuHx15C3GHpcojkgv2sdYWGq/QeGkc8/PQvz1wcCl/KiSywkjB8cAFr6TA5uQTiJgwpn7OP/+w6/+0g/+2PKTmDmx0gkBYcNPQML+Httz/dfw9gu/fgiCCV53aaf/MRE///sEb+Lbw3G8sUSbgd/gqNxoYVxY/st/zPh6XoPpgkuiiCj+AThgkOQp1pj8KihXnXa6/tZ3Zzrh+W+5F1odUL69zfSbdyWFFADhe1sCgn6F0FuonEFRu6xZa5HHi8ClCTVJN2kYzHruhtlcq8IDyd+3V1IyXoVyIEA1NgAAAAA=="
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Вавада"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Вавада</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">150% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">150 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">VIP-Club</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Лотереи</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/vavada/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/vavada/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRhgFAABXRUJQVlA4WAoAAAAQAAAAWQAAMQAAQUxQSIMDAAABoIRt27E3umvbtm3btm3bth3Vtu2/DqbxMcH8cVIrTur2WnzfX+xnEREToP89dwy23PfrKOU672bxPJlRrdzvWyyWB159VfCWi+96aaDfPZ92UtoNj+5bLI9vtJSW+zx8UMmQa7enm4ubx+6cGuBlMT56UF6d7jy0WO4/Xp7OHcBOagnwIpumYr5Raf0gOI0OAQ0lJ8yTiusq0NxwEvMTWoLN2kV/YL7RxFmabYjMrHnw8/ln2CFthm9F5QZ+aZUxAj46hwJjdAZ+1pFU8qON+Gxdg/79AQleHpkmAVaXj+BjElNIp2ysg6TRwXBU6gO0SR0L56XC0eCpvsAik7qSWgMRByKAVlLZJHgkyR5oL38IM6GZAkwyaRdEt/WDm1LZZJhUHZhv9o+GA0t+oQewUZuBzlLJBHgoaQfQUsEQbjYq9ReTjDoJr2t7g4skd9gyFOgsFYkBF9X2/8zqX+gG2MnBrEwSOEuyB9rIPpr3ZpvqY5JetyCyuAv4ppLs4E0ExBWX8r+D1yWk/FNa6uwvOcjpd+yARVLqDpPNXgeapZEnBOe8C+FZpb6YOkuSBUg82kDS3+oD4D0+m+QOX1ZEANtcITKVwsA3xWV4m08qGGOy1VDCG6O15V/TcozfNqV1h+/NHwNdrkCkMr2B6zoAiWWk3K9M1hmUotvNr0Bi6b+mUpuiADa5Ay2uwtem9wx54+FpretAHak9pnclZambUcpzEZihM3+nUilJIz9DkKHeQYiu4mwo9Q2bbaW1kBgDr/NKxROSbvdRH2DZ39qP16bM8oVIQ8VVEFLY3VAD2/2kB7B3CtBaKhwNVpNFv2Evx9+xB7ooAEIN5caCWyZfQzPgcpsjwHgVjobpdYGpZp7qDSw2/KgpqTuwXht/ZwfQVv4QZqjUFS6k8jN0ByarGzBXHYH2GRPhuJmbutn6XlFSGyBgTQDQ6lfsgJbytVG9DjgoACI0GhitDsBKrQRKyxu8UyhLFMQecgYmGX7ePXp/SoFkzJPLmj2RtAp4eDQe/A0NCv1giUINy4AhagbskTOEpdMJoJp0BpvVdBlTV12wcVFSxc/gK6kNNnef+WR9Xj3V0x/ddPPtm1uaFR8U3kzlA6M+rErv8SLmgDQ+MeRdRynPqZAQqzXcb7BkF2e1Wq2xh5T/Qrg10Bp2vpCkYr4vY05L0vj/Qq3W4PAjOfW/5wBWUDggbgEAAPALAJ0BKloAMgA+KRKHQqGhCgVWxgwBQljAJQA/ADYeuAfiN+MHIs9wP2AwmfnA/quEQfyX21ecA4AD9Ves48ncmZCue4c4VftNf0vl6ZWIIC4SMkXArjajcskHl8DgYSYXw4mQ6UTgAP7/PVpprg6Q+tLWfrLXyQj5IMvQ+h48CdmhkCUf0ed8mYejgxVSIL62Wk0bzUs7fX69/7hfkP8Yv99q2SU07fIzNf/+r986AMEGpvlX5NT3N7SvLUfgsVtu+dQV7d/3r7q3Bhn7c9j4ZbEyLBGEmb1XiS2QQ/8IL8OH87n8ll0mfIrXRX872j/8Sex/ccPnLQfz0eZS3v790Ye/s6MrJkW8cWjpr2Yv/NLL/9o9YpbpyEOH+w9EqunIQ4f7DQu5yw3u/YvOURnO/orpDyGg3ytASYmqiQqZA9GvjwCaaEMqpZSUf//IlFFL1DIToRFZb5CB9m+zpuE+9rix3FNlTXQAJACAAA=="
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Maxslots"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Maxslots</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">До $300 бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">20 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Колесо Фортуны</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Кешбек</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/maxslots/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/maxslots/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRhgFAABXRUJQVlA4WAoAAAAQAAAAWQAAMQAAQUxQSIMDAAABoIRt27E3umvbtm3btm3bth3Vtu2/DqbxMcH8cVIrTur2WnzfX+xnEREToP89dwy23PfrKOU672bxPJlRrdzvWyyWB159VfCWi+96aaDfPZ92UtoNj+5bLI9vtJSW+zx8UMmQa7enm4ubx+6cGuBlMT56UF6d7jy0WO4/Xp7OHcBOagnwIpumYr5Raf0gOI0OAQ0lJ8yTiusq0NxwEvMTWoLN2kV/YL7RxFmabYjMrHnw8/ln2CFthm9F5QZ+aZUxAj46hwJjdAZ+1pFU8qON+Gxdg/79AQleHpkmAVaXj+BjElNIp2ysg6TRwXBU6gO0SR0L56XC0eCpvsAik7qSWgMRByKAVlLZJHgkyR5oL38IM6GZAkwyaRdEt/WDm1LZZJhUHZhv9o+GA0t+oQewUZuBzlLJBHgoaQfQUsEQbjYq9ReTjDoJr2t7g4skd9gyFOgsFYkBF9X2/8zqX+gG2MnBrEwSOEuyB9rIPpr3ZpvqY5JetyCyuAv4ppLs4E0ExBWX8r+D1yWk/FNa6uwvOcjpd+yARVLqDpPNXgeapZEnBOe8C+FZpb6YOkuSBUg82kDS3+oD4D0+m+QOX1ZEANtcITKVwsA3xWV4m08qGGOy1VDCG6O15V/TcozfNqV1h+/NHwNdrkCkMr2B6zoAiWWk3K9M1hmUotvNr0Bi6b+mUpuiADa5Ay2uwtem9wx54+FpretAHak9pnclZambUcpzEZihM3+nUilJIz9DkKHeQYiu4mwo9Q2bbaW1kBgDr/NKxROSbvdRH2DZ39qP16bM8oVIQ8VVEFLY3VAD2/2kB7B3CtBaKhwNVpNFv2Evx9+xB7ooAEIN5caCWyZfQzPgcpsjwHgVjobpdYGpZp7qDSw2/KgpqTuwXht/ZwfQVv4QZqjUFS6k8jN0ByarGzBXHYH2GRPhuJmbutn6XlFSGyBgTQDQ6lfsgJbytVG9DjgoACI0GhitDsBKrQRKyxu8UyhLFMQecgYmGX7ePXp/SoFkzJPLmj2RtAp4eDQe/A0NCv1giUINy4AhagbskTOEpdMJoJp0BpvVdBlTV12wcVFSxc/gK6kNNnef+WR9Xj3V0x/ddPPtm1uaFR8U3kzlA6M+rErv8SLmgDQ+MeRdRynPqZAQqzXcb7BkF2e1Wq2xh5T/Qrg10Bp2vpCkYr4vY05L0vj/Qq3W4PAjOfW/5wBWUDggbgEAAPALAJ0BKloAMgA+KRKHQqGhCgVWxgwBQljAJQA/ADYeuAfiN+MHIs9wP2AwmfnA/quEQfyX21ecA4AD9Ves48ncmZCue4c4VftNf0vl6ZWIIC4SMkXArjajcskHl8DgYSYXw4mQ6UTgAP7/PVpprg6Q+tLWfrLXyQj5IMvQ+h48CdmhkCUf0ed8mYejgxVSIL62Wk0bzUs7fX69/7hfkP8Yv99q2SU07fIzNf/+r986AMEGpvlX5NT3N7SvLUfgsVtu+dQV7d/3r7q3Bhn7c9j4ZbEyLBGEmb1XiS2QQ/8IL8OH87n8ll0mfIrXRX872j/8Sex/ccPnLQfz0eZS3v790Ye/s6MrJkW8cWjpr2Yv/NLL/9o9YpbpyEOH+w9EqunIQ4f7DQu5yw3u/YvOURnO/orpDyGg3ytASYmqiQqZA9GvjwCaaEMqpZSUf//IlFFL1DIToRFZb5CB9m+zpuE+9rix3FNlTXQAJACAAA=="
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Slotozal"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Slotozal</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">120% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">70 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Промокоды</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Регулярные акции</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/slotozal/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/slotozal/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,UklGRlQIAABXRUJQVlA4WAoAAAAwAAAAWQAAMQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBI+QIAAAGgRGvbIUl620w1yki0bdvmzrbHtm3bNsqOtm0VBuVk+138X0RFnhO7mUVETAD+K9955ftpeRmfbuhtPe6NX5+sjtSe+/HOrhYT83It9SOf+KxkbjmNRzZax2rW/WmrmEcz77SGbjR3jDJwxqRJkyZNnjTSKzmmTpskTxvbVHAvevb1R+bECA1HzpzQVPLOmDkIyDHpWCMAO6gb/m2QMoAGI24ADV4NUv37kWYAHOW86ZbuJ/dhHM1eCqBAj4z0B9DPCNsD+JQkr5HkyW6AvZThVOlucmfyT6btBpDLK2888tRTj79eTOYC6EuevfPu++67776H7nQBY8mKO3v6ej5OnhkJ2C8yoHMnqa0oN43dlFon1NQSXu8o/Amjd5F3QR22qR4Ef6x0K6l9SPOXKv5EAbnkMCHL0CayaHxqA+jaLzLgRePGjRvjHlLLisLzSm2sMDnEQJxQ9WdaVlbWzjeVTiRZezTj47UxOjdOHTh+/PjxPf+QmhaFt5XrWlpOdkbBTfIlCLpVCpZfoVy+UTKsFUbhLcXgLw7p8oWLxcXF/6YJ6PfEH0crqY4TbpaeLy4uLj5bQ2p/ROERwV9RTnLvFKh9yQK7w+VyxdgkAI3ju6w7RX4qBLrZXS6Xq+WDpPZCFGYogWHxsbeRJ2x6GTCcGA+xy02mCX4nxE2kNvW0acE4xd8WwPvkoSY62UaaLi09PVxYTX4sBFKkO0nN9qJp30EJ+AA0PEJ+oVOdmZ2fn5+vFfVDfIjkTw/ecf8PJIcC9gv0G4L7qlmDAewhOwCAp5p8ph4wkEZnAu4s6m8A4KgmPdJD5CHgeZO+BoCvKo66Fcw6XVI1Euh5/tI5+eL5YQCwIsNPMvTbZACwaX8fS5LWl5X/ALQ4ZkplgtI81lZfQAtXXGugvt1pl52OBgqQPGnhTC/klm1s9aTGrWOaA/CVmXBjMCyy27E6/T0alml7pw4/+2ClI74L6Vz5cw6stuPSp77+/bsXVvaABaeOXXnbmsle/F8iAFZQOCBkAwAA8BQAnQEqWgAyAD4ZDIVBoQRXAS4EAGEoAdk38SeHd7m/tv0tppOlz7f+Tv9g7THiL/278quAB+m3+q/pvvo9IB+r3WLegB+oHpAfqr8EP7Rf8L3Bv4z/O/v2UW3tx1B/43/UOrx6DX65DBEvgG+eUhySSB9NZfDi9XOGg/ljrIJY4PJWZOh2JevbUt0YPbObltEuTJ7Yx+qriaCHNcvuiJkZuY9fBdBvm3xab2JH3nAA/v1kv///7WMvME0PMSF887SFxM/h3kq2f/pW8UX6u/pfVjHhPzo88iwwHrv6X6CgESSmZz+i71NCnVlcvqFJTJ9Vt4FT+DT/w8/8PK/+XIn3kY9Z0l6iKpKtXb/H/qP/j1F9o/zCwaaw3dRjtzn/dtfV2Wz08ZNqQiYEAPjVdc8+h/wzHarAkjN3dgCkLHaga72OCy/DvsZaP/bkg3edphVS1qx0r6XHwCujX/u7vRBLHTTlRuHszGviRXkEjXKsqjRf7sli2+Hv+VLxBBJ57ZsZ1YS8Af+IG8Csrox8GoBQRC37H8aDODrgmAfsVX+6NjG1VG9z/y86Oh3GBzyTa+yZCwqh5qo1fsd1DzLe6GFpr+MCq30N2Pl8qNlWmOqSk6djE8vBd9wNF3oxHr6gQKgf6fYspG5tDsNi+TDsATWH/QwdJNsgQ7lzcpdHDii0+1il9rujT0u3RXFJkwPOQ88H7AL+p/rWUgSB1Uoh2hzZwWBcJ1MV8/R+fDZmBHuQ08GpjZWrSVSGZIbNTbm3M8z1+n82ZDtXSVIEb2OpPl1QVjrKw+6LD+W+b3ZFeFPdOi3COxDi8PgUca/pykRcO3pg9nNbOqvyEc1bdpX2yNQAP6qqHcLyhXTfm98YPenhQXJMLOnAO3NNBVyDJP++b5//2pMAB59yfdJ/oDvq6+DBd89YQWRBRswNxxQhTgtcHr4/D+nBv3CgkcOT41VB6PZ90ST07te4/QDWUxzVeheCS27zq0bKMyDlyuGCHEoqjubJS83nyLHDdP0kcqkvoiz7MzY7uXOv82tiR964LxAW/ZtXmJR/mUxOZOE7KeE2/q+tkn9wdcDRQGQ1ue4AryxD2lR+P3/W0yEEjBoicfZUCqSUWfAQGzOfetwZzgTGshRIYd2UJLRc988TudgAAAAAAA=="
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Fresh"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Fresh</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">225% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">450 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Топ репутация</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Быстрый вывод</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/fresh/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/fresh/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="SOL"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">SOL</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>

            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">120% бонус на первый депозит</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">90 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Бонусы на 1-5 депозитов</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Кешбек</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/sol/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/sol/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

          <div
              className="item p-4 sm:p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="info flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="brands flex items-center">

                <img
                    src="data:image/webp;base64,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"
                    width="100"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    alt="Brillix"
                    className="w-[100px] h-[100px] object-contain"
                />
                <div className="name">
                  <span className="text-lg sm:text-xl font-bold text-gray-100">Brillix</span>
                  <div className="ratings flex mt-2">
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                    <i className="active text-yellow-400 text-sm sm:text-xl mr-1">&#9733;</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="bonus mt-3 sm:mt-4">
              <span className="text-sm sm:text-base text-gray-300">30% на каждое пополнение</span>
              <span className="text-xs sm:text-sm text-gray-500 block mt-1">90 фриспинов</span>
            </div>

            <div className="params mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Криптовалюта</span>
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-lg text-xs sm:text-sm">Техподдержка 24/7</span>
            </div>

            <div className="btn-box mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="/goto/brillix/" rel="nofollow" target="_blank"
                 className="btn btn-transparent border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors">
                Вход
              </a>
              <a href="/goto/brillix/" rel="nofollow" target="_blank"
                 className="btn btn-white bg-white text-gray-900 py-1 sm:py-2 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                Играть
              </a>
            </div>
          </div>

        </div>
      </div>
  );
};

export default RatingCasino;