echo -e "\e[35m

▒█▀▀▀█ ▒█▀▀▀ ▀▀█▀▀ 　 ▀▀█▀▀ ▒█░▒█ ▒█▀▀▀ 　 ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀▀ ▒█▄░▒█ 
░▀▀▀▄▄ ▒█▀▀▀ ░▒█░░ 　 ░▒█░░ ▒█▀▀█ ▒█▀▀▀ 　 ░▀▀▀▄▄ ▒█░░░ ▒█▄▄▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▒█▒█ 
▒█▄▄▄█ ▒█▄▄▄ ░▒█░░ 　 ░▒█░░ ▒█░▒█ ▒█▄▄▄ 　 ▒█▄▄▄█ ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄▄ ▒█░░▀█\n\e[0m" 

: <<'COMMENT'
...
COMMENT

echo -e "\033[01;93mPreparando installazione...\nPreparing installation...\n\033[0m"

echo -e "\033[01;32m\033[01mInstalando dependencias!!\nInstalling dependencies!!\n\033[0m" 
echo -e "\e[36m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

░██████╗░██╗████████╗
██╔════╝░██║╚══██╔══╝
██║░░██╗░██║░░░██║░░░
██║░░╚██╗██║░░░██║░░░
╚██████╔╝██║░░░██║░░░
░╚═════╝░╚═╝░░░╚═╝░░░\n\e[0m"

if command -v git >/dev/null 2>&1; then
echo -e "\033[01;33mGit era già installato precedentemente.\nGit was already installed previously.\033[0m"
else
if pkg install git -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install git -y 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mNon è stato possibile installare Git. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/chatunitycenterr/chatunity-bot\ncd chatunity-bot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mGit è stato installato correttamente.\nGit has been installed successfully.\n\033[0m" 
fi
fi
 
echo -e "\e[35m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

███╗░░██╗░█████╗░██████╗░███████╗░░░░░░░░██╗░██████╗
████╗░██║██╔══██╗██╔══██╗██╔════╝░░░░░░░░██║██╔════╝
██╔██╗██║██║░░██║██║░░██║█████╗░░░░░░░░░░██║╚█████╗░
██║╚████║██║░░██║██║░░██║██╔══╝░░░░░██╗░░██║░╚═══██╗
██║░╚███║╚█████╔╝██████╔╝███████╗██╗╚█████╔╝██████╔╝
╚═╝░░╚══╝░╚════╝░╚═════╝░╚══════╝╚═╝░╚════╝░╚═════╝░\n\e[0m"

if command -v node >/dev/null 2>&1; then
echo -e "\033[01;33mNodejs era già installato precedentemente.\nNodejs was already installed previously.\033[0m"
else
if pkg install nodejs -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install nodejs -y 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mNon è stato possibile installare Node.js. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/chatunitycenterr/chatunity-bot\ncd chatunity-bot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mNode.js è stato installato correttamente.\nNode.js has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

███████╗███████╗███╗░░░███╗██████╗░███████╗░██████╗░
██╔════╝██╔════╝████╗░████║██╔══██╗██╔════╝██╔════╝░
█████╗░░█████╗░░██╔████╔██║██████╔╝█████╗░░██║░░██╗░
██╔══╝░░██╔══╝░░██║╚██╔╝██║██╔═══╝░██╔══╝░░██║░░╚██╗
██║░░░░░██║░░░░░██║░╚═╝░██║██║░░░░░███████╗╚██████╔╝
╚═╝░░░░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚═════╝░\n\e[0m"

if command -v ffmpeg >/dev/null 2>&1; then
echo -e "\033[01;33mFfmpeg era già installato precedentemente.\nFfmpeg was already installed previously.\033[0m"
else
if pkg install ffmpeg -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install ffmpeg -y 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mNon è stato possibile installare FFmpeg. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installa manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/chatunitycenterr/chatunity-bot\ncd chatunity-bot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mFFmpeg è stato installato correttamente.\nFFmpeg has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[35m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

██╗███╗░░░███╗░█████╗░░██████╗░███████╗███╗░░░███╗░█████╗░░██████╗░██╗░█████╗░██╗░░██╗
██║████╗░████║██╔══██╗██╔════╝░██╔════╝████╗░████║██╔══██╗██╔════╝░██║██╔══██╗██║░██╔╝
██║██╔████╔██║███████║██║░░██╗░█████╗░░██╔████╔██║███████║██║░░██╗░██║██║░░╚═╝█████═╝░
██║██║╚██╔╝██║██╔══██║██║░░╚██╗██╔══╝░░██║╚██╔╝██║██╔══██║██║░░╚██╗██║██║░░██╗██╔═██╗░
██║██║░╚═╝░██║██║░░██║╚██████╔╝███████╗██║░╚═╝░██║██║░░██║╚██████╔╝██║╚█████╔╝██║░╚██╗
╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚═╝\n\e[0m"

if command -v convert >/dev/null 2>&1; then
echo -e "\033[01;33mImagemagick era già installato in precedenza.\nImagemagick was already installed previously.\033[0m"
else
if pkg install imagemagick -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install imagemagick -y 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare ImageMagick. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installalo manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/chatunitycenterr/chatunity-bot\ncd chatunity-bot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mImageMagick è stato installato correttamente.\nImageMagick has been installed successfully.\n\033[0m" 
fi
fi


echo -e "\e[36m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

██╗░░░██╗░█████╗░██████╗░███╗░░██╗
╚██╗░██╔╝██╔══██╗██╔══██╗████╗░██║
░╚████╔╝░███████║██████╔╝██╔██╗██║
░░╚██╔╝░░██╔══██║██╔══██╗██║╚████║
░░░██║░░░██║░░██║██║░░██║██║░╚███║
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝\n\e[0m"

if command -v yarn >/dev/null 2>&1; then
echo -e "\033[01;33mYarn era già installato in precedenza.\nYarn was already installed previously.\033[0m"
else
if npm install -g yarn 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install -g yarn 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare Yarn. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installalo manualmente!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/chatunitycenterr/chatunity-bot\ncd chatunity-bot\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mYarn è stato installato correttamente.\nYarn has been installed successfully.\n\033[0m" 
fi
fi


echo -e "\e[36m

░█▀▀█ ▒█░░░ ▒█░░░ 　 ▒█▀▀█ ▀█▀ ▒█▀▀█ ▒█░▒█ ▀▀█▀▀ 
▒█▄▄█ ▒█░░░ ▒█░░░ 　 ▒█▄▄▀ ▒█░ ▒█░▄▄ ▒█▀▀█ ░▒█░░ 
▒█░▒█ ▒█▄▄█ ▒█▄▄█ 　 ▒█░▒█ ▄█▄ ▒█▄▄█ ▒█░▒█ ░▒█░░\n\e[0m"
echo -e "\033[01;32m\033[01m\nTutte le dipendenze sono state installate correttamente.\nAll dependencies have been installed successfully.\n\033[0m"

echo -e "\e[35m
██╗░░██╗░░██╗░░  ██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
╚██╗░╚██╗░╚██╗░  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
░╚██╗░╚██╗░╚██╗  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
░██╔╝░██╔╝░██╔╝  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██╔╝░██╔╝░██╔╝░  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝░░╚═╝░░╚═╝░░  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝


░█████╗░██╗░░██╗░█████╗░████████╗██╗░░░██╗███╗░░██╗██╗████████╗██╗░░░██╗░░░░░░██████╗░░█████╗░████████╗
██╔══██╗██║░░██║██╔══██╗╚══██╔══╝██║░░░██║████╗░██║██║╚══██╔══╝╚██╗░██╔╝░░░░░░██╔══██╗██╔══██╗╚══██╔══╝
██║░░╚═╝███████║███████║░░░██║░░░██║░░░██║██╔██╗██║██║░░░██║░░░░╚████╔╝░█████╗██████╦╝██║░░██║░░░██║░░░
██║░░██╗██╔══██║██╔══██║░░░██║░░░██║░░░██║██║╚████║██║░░░██║░░░░░╚██╔╝░░╚════╝██╔══██╗██║░░██║░░░██║░░░
╚█████╔╝██║░░██║██║░░██║░░░██║░░░╚██████╔╝██║░╚███║██║░░░██║░░░░░░██║░░░░░░░░░██████╦╝╚█████╔╝░░░██║░░░
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░╚══╝╚═╝░░░╚═╝░░░░░░╚═╝░░░░░░░░░╚═════╝░░╚════╝░░░░╚═╝░░░\n\e[0m"

echo -e "\033[1;35m"
git clone https://github.com/chatunitycenterr/chatunity-bot.git
echo -e "\033[01;32m\033[01mLa clonazione è stata scaricata e installata correttamente.\nThe clone has been downloaded and installed successfully.\n\033[0m"

echo -e "\033[01;32m\033[01mCambiando alla directory del repository!!\nChanging to the repository directory!!\n\033[0m" 
cd chatunity-bot

echo -e "\e[36m
██╗░░░██╗██████╗░██████╗░░█████╗░████████╗███████╗  ██╗░░░██╗░█████╗░██████╗░███╗░░██╗
██║░░░██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝  ╚██╗░██╔╝██╔══██╗██╔══██╗████╗░██║
██║░░░██║██████╔╝██║░░██║███████║░░░██║░░░█████╗░░  ░╚████╔╝░███████║██████╔╝██╔██╗██║
██║░░░██║██╔═══╝░██║░░██║██╔══██║░░░██║░░░██╔══╝░░  ░░╚██╔╝░░██╔══██║██╔══██╗██║╚████║
╚██████╔╝██║░░░░░██████╔╝██║░░██║░░░██║░░░███████╗  ░░░██║░░░██║░░██║██║░░██║██║░╚███║
░╚═════╝░╚═╝░░░░░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝  ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝\n\e[0m"

echo -e "\033[0;34mYarn verrà aggiornato automaticamente. Attendere un momento, per favore.\nIt will update yarn automatically. Wait a moment please.\n\033[0m"
if yarn install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(yarn install 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare Yarn. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installalo manualmente!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mYarn è stato aggiornato correttamente.\nYarn has been successfully updated.\n\033[0m" 
fi

echo -e "\e[35m
██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░  ███╗░░██╗██████╗░███╗░░░███╗
██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░  ████╗░██║██╔══██╗████╗░████║
██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░  ██╔██╗██║██████╔╝██╔████╔██║
██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░  ██║╚████║██╔═══╝░██║╚██╔╝██║
██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗  ██║░╚███║██║░░░░░██║░╚═╝░██║
╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝  ╚═╝░░╚══╝╚═╝░░░░░╚═╝░░░░░╚═╝\n\e[0m"

echo -e "\033[0;34mNPM verrà installato automaticamente. Attendere un momento, per favore.\nNPM will be installed automatically. Wait a moment please.\n\033[0m"
if npm install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install 2>&1 >/dev/null)
echo -e "\033[0;31mErrore: $error\033[0m" 
echo -e "\033[0;34mImpossibile installare NPM. Verifica la tua connessione a Internet e riprova. Se l'errore persiste, installalo manualmente!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mNPM è stato installato correttamente.\n\033[0m" 
fi


: <<'COMMENT'
v="${b}\033[1;32m"
v1="${b}\033[32m"
b="\033[0m"

menu() {
	#Chatunity-bot
	echo -e "${v1} MENU DI CONFIGURAZIONE"
	printf "\n"
	printf "${v1}[${b}01${v1}]${v} Visitare il Gruppo di Aggiornamenti\n"
	printf "\n"
	printf "${v1}[${b}02${v1}]${v} Scegliere la lingua italiana\n"
	printf "\n"
	printf "${v1}[${b}03${v1}]${v} Scegliere la lingua inglese\n"
	printf "\n"
	printf "${v1}[${b}04${v1}]${v} Continuare\n"
	printf "\n"
}

menu_aiuto() {
    #printf "${v1}[${b}++${v1}]${v} chatunity-botD${b}: "
	read opzione
	case $opzione in
            01|1)
                am start -a android.intent.action.VIEW https://chat.whatsapp.com/LChd7a5px3n3Jr83egpWvr &>> /dev/null
                echo -e "${b}[${v1}++${b}]${v} Accesso al Gruppo Ufficiale\n"
                
                ;;
            02|2)
                echo -e "${b}[${v1}++${b}]${v} Lingua italiana selezionata\n"
                
                ;;
            03|3)
                echo -e "${b}[${v1}++${b}]${v} Lingua inglese selezionata\n"
                
                ;;
	    04|4)
	        avvia
                echo -e "${b}[${v1}++${b}]${v} Continuando...\n"
                
                ;;
            *)
                echo -e "${v1}Comando: '"${r1}${opzione}${v1}"' non valido."
		echo ""
		inizio
                ;;
        esac
}


menu
menu_ayuda
COMMENT

clear
echo -e "\e[36m

░██████╗░██████╗░░█████╗░███████╗██╗███████╗  ██████╗░███████╗██████╗░
██╔════╝░██╔══██╗██╔══██╗╚════██║██║██╔════╝  ██╔══██╗██╔════╝██╔══██╗
██║░░██╗░██████╔╝███████║░░███╔═╝██║█████╗░░  ██████╔╝█████╗░░██████╔╝
██║░░╚██╗██╔══██╗██╔══██║██╔══╝░░██║██╔══╝░░  ██╔═══╝░██╔══╝░░██╔══██╗
╚██████╔╝██║░░██║██║░░██║███████╗██║███████╗  ██║░░░░░███████╗██║░░██║
░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝╚══════╝  ╚═╝░░░░░╚══════╝╚═╝░░╚═╝

██╗░░░░░██╗██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░░█████╗░███████╗██╗░█████╗░███╗░░██╗███████╗
██║░░░░░╚█║██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░██╔══██╗╚════██║██║██╔══██╗████╗░██║██╔════╝
██║░░░░░░╚╝██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░███████║░░███╔═╝██║██║░░██║██╔██╗██║█████╗░░
██║░░░░░░░░██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░██╔══██║██╔══╝░░██║██║░░██║██║╚████║██╔══╝░░
███████╗░░░██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗██║░░██║███████╗██║╚█████╔╝██║░╚███║███████╗
╚══════╝░░░╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚═╝╚══════╝╚═╝░╚════╝░╚═╝░░╚══╝╚══════╝\n\e[0m"

echo -e "\e[31m
_░▒███████
░██▓▒░░▒▓██
██▓▒░__░▒▓██___██████
██▓▒░____░▓███▓__░▒▓██
██▓▒░___░▓██▓_____░▒▓██
██▓▒░_______________░▒▓██
_██▓▒░______________░▒▓██
__██▓▒░____________░▒▓██
___██▓▒░__________░▒▓██
____██▓▒░________░▒▓██
_____██▓▒░_____░▒▓██
______██▓▒░__░▒▓██
_______█▓▒░░▒▓██
_________░▒▓██
_______░▒▓██
_____░▒▓██\n\e[0m"
    
sleep 15 && pkill mpv > /dev/null 2>&1 && sleep 2 && rm -f /data/data/com.termux/files/home/"$random_mp3" &
echo -e "\033[01;32m\033[01Avviando chatunity-bot..!!\nStarting Chatunity-Bot!!\n\033[0m"
npm start