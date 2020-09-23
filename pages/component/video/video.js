// pages/component/video/video.js
Page({
	data: {
		index: 0,
		videoList: [
			"https://d7ti09abobbqa.cloudfront.net/download/media/mm/datemein/video/071b8d23961012678473d5aeacec46b1.mp4",
			"https://d7ti09abobbqa.cloudfront.net/download/media/mm/datemein/video/f89d3bd6b41a7c87c7fd42fb85de3d13.mp4",
			"https://d7ti09abobbqa.cloudfront.net/download/media/mm/datemein/video/a771999da7bf3c4188c0ef9e269111b0.mp4",
			"https://d7ti09abobbqa.cloudfront.net/download/media/mm/datemein/video/695fb7bf0e09b15c502cc5e67bd2f7b3.mp4",
			"https://d7ti09abobbqa.cloudfront.net/download/media/mm/datemein/video/88da8d93224cccaab6d24eae44ae5c9c.mp4",
			"https://d7ti09abobbqa.cloudfront.net/download/media/mm/datemein/video/f35fc7e6059ba850170847737ba46188.mp4",
			"https://d7ti09abobbqa.cloudfront.net/download/media/mm/datemein/video/6bccc7eadd572b93b2761618d85e657e.mp4"
		],
		videoUrl: "",
		hasVideo: false
	},
	getVideo() {
		let index = this.data.index
		const videoList = this.data.videoList
		if (index >= this.data.videoList.length) {
			index = 0
		}
		let newIndex = index + 1
		this.setData({
			index: newIndex,
			videoUrl: videoList[index],
			hasVideo: true,
		})
	}
})