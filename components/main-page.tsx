'use client'

import { ChevronDownIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MainPage() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="text-2xl font-bold">
        💡 카피의 소재를 알려주세요
      </header>
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold mb-2">제품 / 브랜드</h2>
              <input className="w-full p-2 border rounded" placeholder="하이볼" />
            </div>
            <div>
              <h2 className="font-semibold mb-2">테마 / 키워드</h2>
              <input className="w-full p-2 border rounded" placeholder="할인" />
            </div>
          </div>
        </CardContent>
      </Card>

      <header className="text-2xl font-bold">
        💡 채널과 컨텐츠 타입 타겟을 알려주세요
      </header>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h2 className="font-semibold mb-2">채널</h2>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="채널 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gs_app">우리동네 GS APP</SelectItem>
                  <SelectItem value="gs_shop">GS Shop</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h2 className="font-semibold mb-2">컨텐츠 타입</h2>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="컨텐츠 타입 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banner">이벤트 배너</SelectItem>
                  <SelectItem value="product_desc">상품 설명</SelectItem>
                  <SelectItem value="promo_msg">프로모션 메세지</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h2 className="font-semibold mb-2">타겟 (연령 / 성별 / 기타)</h2>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="타겟 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20f">20대 / 여성 / MZ세대</SelectItem>
                  <SelectItem value="30m">30대 / 남성 / 직장인</SelectItem>
                  <SelectItem value="40f">40대 / 여성 / 주부</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button className="px-8 py-2 text-lg w-1/2">생성</Button>
      </div>

      <header className="text-2xl font-bold">
        💡 제안드리는 내용입니다
      </header>

      <Card>
        <CardContent className="p-6 space-y-2">
          <p>#하이볼덕후들 모여라! 👋 하이볼 모음전 최대 40% 할인 (9/1~30일 초특가 행사)</p>
          <p>#MZ세대 짱짱싸 하이볼 1+1 ✨ (배달, 픽업 주문 시 단독 혜택)</p>
          <p>#오늘도 하이볼 각? 🍹 월,화,수 하이볼 4캔 9,900원 (9/1~9/18 한정 행사)</p>
          <p>#하이볼과 함께하는 힐링타임 🍋 (신상품 출시 기념 특별 할인)</p>
        </CardContent>
      </Card>
    </div>
  )
}