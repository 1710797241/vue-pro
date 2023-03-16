export const handleDownloadFile = async (
    data: string | Blob | MediaSource,
    filename: string,
    type = 'blob'
) => {
    if (type == 'blob' || type == 'link') {
        try {
            let href: string = '';

            if (type == 'blob') {
                href = window.URL.createObjectURL(data);
            } else {
                href = data;
            }
            let downloadElement = document.createElement('a');
            downloadElement.href = href;
            downloadElement.download = filename;
            document.body.appendChild(downloadElement);
            downloadElement.click();
            document.body.removeChild(downloadElement);
            window.URL.revokeObjectURL(href);
        } catch (error) {
            console.log('error', error);
        }
    }
};
