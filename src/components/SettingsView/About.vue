<template>
    <div class="aboutarchivamusic">
        <div class="version">Archiva Music v{{ settings.version }}</div>
        Archiva Music 是面向个人音乐收藏的自托管音乐库与流媒体服务器，支持多音质、多版本音乐统一管理。
        如果这个项目对你有帮助，欢迎在 GitHub 上点亮 Star，也欢迎提出建议。😁🤗
        <br /><br />
        <div class="links">
            <h2>Links</h2>
            <div class="flex">
                <a
                    href="https://github.com/lukeli17/ArchivaMusic"
                    target="_blank"
                    ><button>项目主页</button></a
                >
                <a
                    href="https://github.com/lukeli17/ArchivaMusic"
                    target="_blank"
                    ><button>Star on Github</button></a
                >
                <a
                    href="https://github.com/lukeli17/ArchivaMusic/issues/new"
                    target="_blank"
                >
                    <button>报告问题</button>
                </a>
                <a
                    href="https://github.com/lukeli17/ArchivaMusic/blob/master/.github/contributing.md"
                    target="_blank"
                    ><button>参与贡献</button></a
                >
            </div>
        </div>
        <br />
        <div class="contact">
            <h2>Get in touch</h2>
            If you like my work, and would like to say hi, I'd like to hear from
            you.
            <br /><br />
            <div class="flex">
                <a
                    href="mailto:geoffreymungai45@gmail.com?subject=Hiii 👋😁&body=Hi Mungai,
        "
                    target="_blank"
                    ><button>Send email</button></a
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSettings from '@/stores/settings'

const settings = useSettings()
</script>

<style lang="scss">
.aboutarchivamusic {
    padding: $small;

    .version {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: $small;
        border-bottom: solid 1px $separator;
        padding-bottom: 1rem;
    }

    .links .flex {
        flex-wrap: wrap;
        margin-top: $small;
        gap: 1rem;
    }

    .contact button {
        background-color: $blue;
    }

    h2 {
        margin-top: 0;
        margin-bottom: $smaller;
    }
}
</style>
