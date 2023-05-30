<template>
  <div class="h-full">
   
    <Layout>
      <Content :style="{ padding: '15px' }">
        <Card class="cardClass">
          <div ref="chatContent" class="shadowMd">
            <aside class="sidebarClass">
              <Space class="sidebarSpace" direction="vertical" type="flex">
                <Button class="newChatClass" type="dashed" long
                  >New Chat</Button
                >
              </Space>

              <main class="sidebarMain">
                <div class="sidebanDivActive">
                  <div class="sidebanDiv_left">
                    <Icon color="#18a058" type="ios-chatbubbles"></Icon>
                    <span>New Chat</span>
                  </div>

                  <div class="sidebanDiv_right">
                    <Icon color="#18a058" type="md-create"></Icon>
                    <Icon color="#18a058" type="md-close"></Icon>
                  </div>
                </div>

                <div class="sidebanDiv">
                  <div class="sidebanDiv_left">
                    <Icon type="ios-chatbubbles"></Icon>
                    <span>New Chat</span>
                  </div>
                  <div class="sidebanDiv_right">
                    <Icon type="md-create"></Icon>
                    <Icon type="md-close"></Icon>
                  </div>
                </div>

              </main>

              <footer class="sidebarFooter">
                <div class="sidebarFooterBox">
                  <div class="sidebarFooterBoxCenter">
                    <Space wrap>
                      <template v-for="(url, index) in urlList" :key="url">
                        <Image
                          class="headerImageClass"
                          :src="url"
                          preview
                          :preview-list="urlList"
                          :initial-index="index"
                        />
                      </template>
                    </Space>
                    <div class="boxCenter">
                         <div class="userName">1842146958@qq.com</div>


                    </div>
                  </div>
                  <div>
                    <Icon size="28" type="ios-cog" />
                  </div>
                </div>
              </footer>
            </aside>

            <div class="chatMessage">
              <main class="chatMainClass" v-if="isOpenChat">

                <div class="chatpdf">
 
        <div class="chatpdfBox">
            <div class="chatpdfLine">
                <div class="chatpdfRow chatpdfDefault">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        width="1.8em"
                        height="1.8em">
                        <path
                        d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    <div class="chatLeft">
                        <div class="timer">
                            2023/5/30 11:00:09
                        </div>
                        <div class="chatMore">
                            <div class="chatpdfContent">
                                    我是知识库机器人，一个专门响应人类指令的大模型
                            </div>
                            <div class="chatMoreClass">
                                <div>
                                    <Icon type="ios-sync" />
                                </div>
                                <div>


                                    <Poptip trigger="hover" padding="5px 0px 5px 10px"  placement="right">
                                        <Icon type="md-more" />
        <template #content>
            <div class="iconClass">
                <Icon type="ios-copy-outline" />
                <span>复制</span>
            </div>
            <div class="iconClass">
                <Icon type="ios-trash" />
                <span>删除</span>
            </div>
        </template>
    </Poptip>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chatpdfRow chatpdfAsk">
                    <div class="chatRight">
                        <div class="timerRight">
                            2023/5/30 11:00:09
                        </div>
                        <div class="chatMore">
                            <div class="chatMoreClass">
                                    <Poptip trigger="hover" padding="5px 0px 5px 10px"  placement="left" >
                                        <Icon type="md-more" />
        <template #content>
            <div class="iconClass">
                <Icon type="ios-copy-outline" />
                <span>复制</span>
            </div>
            <div class="iconClass">
                <Icon type="ios-trash" />
                <span>删除</span>
            </div>
        </template>
    </Poptip>
                            </div>
                            <div class="chatpdfContent">
                                自建私有数据知识库 · 与知识库AI聊天
                            </div>
                        </div>

                    </div>
                    <div>
                            <img class="headImg" src="https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg" alt="">
                    </div>
                </div>
                <div class="chatpdfRow chatpdfDefault">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        width="1.8em"
                        height="1.8em">
                        <path
                        d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    <div class="chatLeft">
                        <div class="timer">
                            2023/5/30 11:00:09
                        </div>


                        <div class="chatMore">
                            <div class="chatpdfContent">
                                您好！想要自建私有数据知识库并与知识库AI聊天，您可以使用一些已经存在的工具和技术来实现这个目标。其中，您需要掌握以下方面：
                                <br/>

1: 数据库技术：在搭建私有数据知识库时，您需要选择一个合适的数据库来存储知识数据。比较常见的数据库有MySQL、PostgreSQL、MongoDB等等。
<br/>

2:自然语言处理技术：要构建一个能够聊天的知识库AI，您需要掌握一些自然语言处理技术，比如分词、词性标注、命名实体识别、情感分析等等。
<br/>

3:机器学习技术：如果您想让知识库AI变得更加智能和自适应，可以使用机器学习技术进行训练和优化，比如基于GPT模型的文本生成和预测等。
<br/>

4:语料收集与整理：知识库AI需要足够的语料数据来进行训练和学习。您可以通过爬虫和其他方式来收集相关的语料数据，并进行清洗、去噪等操作，使其符合知识库AI模型的训练要求。

希望这些信息对您有所帮助！
                            </div>
                            <div class="chatMoreClass">
                                <div>
                                    <Icon type="ios-sync" />
                                </div>
                                <div>
                                    <Icon type="md-more" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="chatpdfRow chatpdfAsk">
                    <div class="chatRight">
                        <div class="timerRight">
                            2023/5/30 11:19:58
                        </div>
                        <div class="chatMore">
                            <div class="chatMoreClass">
                                <div>
                                    <Icon type="md-more" />
                                </div>
                            </div>
                            <div class="chatpdfContent">
                                如何看待A股市场
                            </div>
                        </div>

                    </div>
                    <div>
                            <img class="headImg" src="https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg" alt="">
                    </div>
                </div>
                <div class="chatpdfRow chatpdfDefault">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        width="1.8em"
                        height="1.8em">
                        <path
                        d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    <div class="chatLeft">
                        <div class="timer">
                            2023/5/30 11:22:12
                        </div>


                        <div class="chatMore">
                            <div class="chatpdfContent">
                        投资有风险,入市需谨慎
                            </div>
                            <div class="chatMoreClass">
                                <div>
                                    <Icon type="ios-sync" />
                                </div>
                                <div>
                                    <Icon type="md-more" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chatpdfRow chatpdfDefault">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        width="1.8em"
                        height="1.8em">
                        <path
                        d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    <div class="chatLeft">
                        <div class="timer">
                            2023/5/30 11:00:09
                        </div>


                        <div class="chatMore">
                            <div class="chatpdfContent">
                                您好！想要自建私有数据知识库并与知识库AI聊天，您可以使用一些已经存在的工具和技术来实现这个目标。其中，您需要掌握以下方面：
                                <br/>

1: 数据库技术：在搭建私有数据知识库时，您需要选择一个合适的数据库来存储知识数据。比较常见的数据库有MySQL、PostgreSQL、MongoDB等等。
<br/>

2:自然语言处理技术：要构建一个能够聊天的知识库AI，您需要掌握一些自然语言处理技术，比如分词、词性标注、命名实体识别、情感分析等等。
<br/>

3:机器学习技术：如果您想让知识库AI变得更加智能和自适应，可以使用机器学习技术进行训练和优化，比如基于GPT模型的文本生成和预测等。
<br/>

4:语料收集与整理：知识库AI需要足够的语料数据来进行训练和学习。您可以通过爬虫和其他方式来收集相关的语料数据，并进行清洗、去噪等操作，使其符合知识库AI模型的训练要求。

希望这些信息对您有所帮助！
                            </div>
                            <div class="chatMoreClass">
                                <div>
                                    <Icon type="ios-sync" />
                                </div>
                                <div>
                                    <Icon type="md-more" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chatpdfRow chatpdfDefault">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        width="1.8em"
                        height="1.8em">
                        <path
                        d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    <div class="chatLeft">
                        <div class="timer">
                            2023/5/30 11:00:09
                        </div>


                        <div class="chatMore">
                            <div class="chatpdfContent">
                                您好！想要自建私有数据知识库并与知识库AI聊天，您可以使用一些已经存在的工具和技术来实现这个目标。其中，您需要掌握以下方面：
                                <br/>

1: 数据库技术：在搭建私有数据知识库时，您需要选择一个合适的数据库来存储知识数据。比较常见的数据库有MySQL、PostgreSQL、MongoDB等等。
<br/>

2:自然语言处理技术：要构建一个能够聊天的知识库AI，您需要掌握一些自然语言处理技术，比如分词、词性标注、命名实体识别、情感分析等等。
<br/>

3:机器学习技术：如果您想让知识库AI变得更加智能和自适应，可以使用机器学习技术进行训练和优化，比如基于GPT模型的文本生成和预测等。
<br/>

4:语料收集与整理：知识库AI需要足够的语料数据来进行训练和学习。您可以通过爬虫和其他方式来收集相关的语料数据，并进行清洗、去噪等操作，使其符合知识库AI模型的训练要求。

希望这些信息对您有所帮助！
                            </div>
                            <div class="chatMoreClass">
                                <div>
                                    <Icon type="ios-sync" />
                                </div>
                                <div>
                                    <Icon type="md-more" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chatpdfRow chatpdfDefault">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        width="1.8em"
                        height="1.8em">
                        <path
                        d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    <div class="chatLeft">
                        <div class="timer">
                            2023/5/30 11:00:09
                        </div>


                        <div class="chatMore">
                            <div class="chatpdfContent">
                                您好！想要自建私有数据知识库并与知识库AI聊天，您可以使用一些已经存在的工具和技术来实现这个目标。其中，您需要掌握以下方面：
                                <br/>

1: 数据库技术：在搭建私有数据知识库时，您需要选择一个合适的数据库来存储知识数据。比较常见的数据库有MySQL、PostgreSQL、MongoDB等等。
<br/>

2:自然语言处理技术：要构建一个能够聊天的知识库AI，您需要掌握一些自然语言处理技术，比如分词、词性标注、命名实体识别、情感分析等等。
<br/>

3:机器学习技术：如果您想让知识库AI变得更加智能和自适应，可以使用机器学习技术进行训练和优化，比如基于GPT模型的文本生成和预测等。
<br/>

4:语料收集与整理：知识库AI需要足够的语料数据来进行训练和学习。您可以通过爬虫和其他方式来收集相关的语料数据，并进行清洗、去噪等操作，使其符合知识库AI模型的训练要求。

希望这些信息对您有所帮助！
                            </div>
                            <div class="chatMoreClass">
                                <div>
                                    <Icon type="ios-sync" />
                                </div>
                                <div>
                                    <Icon type="md-more" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


            </main>
            <div class="notChatClass" v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="mr-2 text-3xl iconify iconify--ri"
                  width="3em"
                  height="3em"
                  viewBox="0 0 24 24">
                  <path fill="currentColor" d="M16 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6ZM6 12a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm8.5-10a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Z"></path>
                </svg>
                    <ul class="notChatUl">
                        <li>
                            <span>禁止发布、传播任何违法、违规内容，使用本网站，视您接受并同意</span>
                            <span class="disclaimer">《免责声明》</span>
                        </li>
                        <li>服务器昂贵、接口昂贵、如果你觉得做的好，请推广给需要的同学,</li>
                    </ul>
              </div>
              <footer class="chatFooter">

                <div class="chatpdfArea">
                <textarea></textarea>
                <button>
                    <svg t="1682141916531" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1271" width="16" height="16"><path d="M0 1024l106.496-474.112 588.8-36.864-588.8-39.936L0 0l1024 512z" fill="#ffffff" p-id="1272"></path></svg>
                </button>
            </div>

              </footer>
            </div>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script setup lang="ts">
interface Reactive {
  chatIndex: Number;
  urlList: Array<String>;
  isOpenChat: Boolean;
}

import { onMounted, reactive, nextTick, ref, Ref } from "vue";
const chatContent = ref();
const state: Reactive = reactive({
  chatIndex: 0,
  urlList: ["https://file.iviewui.com/images/image-demo-1.jpg"],
  isOpenChat: true,
});

onMounted(() => {
  nextTick(() => {
    window.addEventListener(
      "resize",
      (event) => {
        const orientation =
          window.innerWidth > window.innerHeight ? "landscape" : "portrait";
        if (orientation === "portrait") {
          chatContent.value.style.minHeight =
            window.document.documentElement.clientHeight - 32 + "px";
        }
      },
      false
    );
    chatContent.value.style.minHeight =
      window.document.documentElement.clientHeight - 32 + "px";
  });
});

const { urlList, isOpenChat } = state;
</script>

<style scoped lang="less">
@import "./index.less";
</style>
