package com.green.project_quadruaple.review.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.green.project_quadruaple.common.model.Paging;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Schema(title = "리뷰 요청")
public class ReviewSelReq extends Paging {
    @NotNull
    @Positive
    @Schema(title = "상품 PK",description = "상품 PK", example = "1")
//    @JsonProperty("strf_id")
    private long strfId;


    public ReviewSelReq(Integer size, Integer page , long strfId) {
        super(size, page);
        this.strfId = strfId;
    }
}

