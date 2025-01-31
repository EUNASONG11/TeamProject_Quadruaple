package com.green.project_quadruaple.review.model;

import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.model.ResultResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Schema(title = "리뷰 정보")
@ToString
@EqualsAndHashCode
public class ReviewSelRes extends ResultResponse {
        public ReviewSelRes() {
                super(ResponseCode.OK.getCode());
        }

        @Schema(description = "리뷰 내용")
        private String content;
        @Schema(description = "평점", example = "5")
        private Integer rating;
        private long strfId;
        @Schema(description = "작성자 이름")
        private String writerUserName;
        @Schema(description = "리뷰 ID")
        private Long reviewId;
        @Schema(description = "리뷰 개수")
        private Integer userWriteReviewCnt;
        @Schema(description = "작성자 ID", example = "12345")
        private Long writerUserId;
        @Schema(description = "작성자 프로필 사진")
        private String writerUserPic;
        @Schema(description = "리뷰 작성 날짜")
        private String reviewWriteDate;
        @Schema(description = "리뷰 사진 리스트")
        private List<ReviewPicSel> reviewPics;
        @Schema(description = "더 보기 리뷰 여부")
        private boolean moreReview;
}
